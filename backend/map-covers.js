const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

// Normalize a string for comparison (lowercase, alphanumeric only)
function normalizeString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function run() {
  try {
    await client.connect();
    const db = client.db('librarymanagementsystem');
    const booksCol = db.collection('books');
    
    // Read files from public/images/covers
    const coversDir = path.join(__dirname, '..', 'public', 'images', 'covers');
    const files = fs.readdirSync(coversDir).filter(file => file.match(/\.(jpg|jpeg|png)$/i));
    
    // Create a mapping of normalized filename (without extension) -> original filename
    const fileMap = {};
    for (const file of files) {
      const parsed = path.parse(file);
      const normalized = normalizeString(parsed.name);
      fileMap[normalized] = file;
    }

    console.log(`Found ${files.length} cover images.`);

    // Fetch all books
    const books = await booksCol.find({}).toArray();
    console.log(`Found ${books.length} books in the database.`);

    let matchedCount = 0;

    for (const book of books) {
      const normalizedTitle = normalizeString(book.title);
      const matchedFile = fileMap[normalizedTitle];

      if (matchedFile) {
        const coverUrl = `/images/covers/${matchedFile}`;
        await booksCol.updateOne({ _id: book._id }, { $set: { cover: coverUrl } });
        console.log(`✅ Matched: "${book.title}" -> ${matchedFile}`);
        matchedCount++;
      } else {
        console.log(`❌ No match found for: "${book.title}" (Normalized: ${normalizedTitle})`);
      }
    }

    console.log(`\nMapping complete: ${matchedCount} / ${books.length} books matched and updated.`);
  } catch (err) {
    console.error("Error running mapping:", err);
  } finally {
    await client.close();
  }
}

run();
