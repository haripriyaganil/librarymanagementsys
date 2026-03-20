const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('librarymanagementsystem');
    const books = database.collection('books');

    const result = await books.updateMany(
      {},
      { $set: { cover: "/images/covers/default-book.jpg" } }
    );
    console.log(result.modifiedCount + " documents were updated successfully.");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
