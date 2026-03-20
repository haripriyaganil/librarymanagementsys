const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const covers = [
  { url: "https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg", dest: "public/images/covers/trending-1.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9780345339683-L.jpg", dest: "public/images/covers/trending-2.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg", dest: "public/images/covers/trending-3.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg", dest: "public/images/covers/trending-4.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg", dest: "public/images/covers/trending-5.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg", dest: "public/images/covers/trending-6.jpg" },
];

Promise.all(covers.map(c => download(c.url, path.join(__dirname, c.dest))))
  .then(() => {
     let homePath = path.join(__dirname, 'src/pages/Home.js');
     let content = fs.readFileSync(homePath, 'utf8');
     
     // Serially replace the first 6 instances of default-book with trending-N
     for(let i=1; i<=6; i++) {
        content = content.replace('"/images/covers/default-book.jpg"', `"/images/covers/trending-${i}.jpg"`);
     }
     fs.writeFileSync(homePath, content);
     console.log('Trending covers fixed!');
  }).catch(err => {
     console.error("Error:", err);
  });
