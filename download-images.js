const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
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

const images = [
  { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80", dest: "public/images/backgrounds/auth-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop", dest: "public/images/backgrounds/home-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop", dest: "public/images/backgrounds/home-about-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop", dest: "public/images/backgrounds/login-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop", dest: "public/images/backgrounds/register-bg.jpg" },
  { url: "https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg", dest: "public/images/covers/default-book.jpg" } 
];

Promise.all(images.map(img => download(img.url, path.join(__dirname, img.dest))))
  .then(() => console.log('All images downloaded successfully!'))
  .catch(err => console.error('Error downloading:', err));
