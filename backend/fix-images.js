const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/librarymanagementsystem').then(async () => {
  const collection = mongoose.connection.db.collection('books');
  const books = await collection.find({cover: /librarymanagementsystem/i}).toArray();
  for (const book of books) {
    let newCover = book.cover;
    const publicIndex = newCover.indexOf('public\\');
    if (publicIndex !== -1) {
      newCover = '/' + newCover.substring(publicIndex + 7).replace(/\\/g, '/');
      await collection.updateOne({_id: book._id}, {$set: {cover: newCover}});
      console.log(`Updated ${book.title}: ${newCover}`);
    }
  }
  console.log('Done fixing images');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
