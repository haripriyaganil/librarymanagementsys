const { MongoClient } = require('mongodb');
const https = require('https');
const fs = require('fs');
const path = require('path');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

// Helper to make https GET requests
const httpGet = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

// Helper to download an image file
const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  try {
    await client.connect();
    const db = client.db('librarymanagementsystem');
    const booksCol = db.collection('books');
    
    // Get all books pointing to default
    const books = await booksCol.find({ cover: "/images/covers/default-book.jpg" }).toArray();
    console.log(`Found ${books.length} books to update.`);

    for (const book of books) {
      console.log(`Fetching cover for: ${book.title}`);
      
      try {
        const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(book.title)}+inauthor:${encodeURIComponent(book.author)}&maxResults=1`;
        const resData = await httpGet(searchUrl);
        const json = JSON.parse(resData);
        
        let coverUrl = null;
        if (json.items && json.items.length > 0 && json.items[0].volumeInfo.imageLinks) {
           coverUrl = json.items[0].volumeInfo.imageLinks.thumbnail;
        }

        if (coverUrl) {
           coverUrl = coverUrl.replace('http:', 'https:').replace('&zoom=1', '&zoom=2');

           const fileName = `book-${book._id}.jpg`;
           const destPath = path.join(__dirname, '..', 'public', 'images', 'covers', fileName);
           
           await downloadImage(coverUrl, destPath);
           
           await booksCol.updateOne({ _id: book._id }, { $set: { cover: `/images/covers/${fileName}` } });
           
           // Small delay to prevent rate limits
           await new Promise(r => setTimeout(r, 200));
        } else {
           console.log(`No cover found for ${book.title}`);
        }
      } catch (err) {
        console.error(`Failed to process ${book.title}:`, err.message);
      }
    }
    console.log("Finished updating covers.");
  } finally {
    await client.close();
  }
}
run();
