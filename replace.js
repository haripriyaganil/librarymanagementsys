const fs = require('fs');
const path = require('path');

const booksDataPath = path.join(__dirname, 'src', 'data', 'booksData.js');
let booksData = fs.readFileSync(booksDataPath, 'utf8');
booksData = booksData.replace(/https:\/\/covers\.openlibrary\.org\/b\/isbn\/.*?-L\.jpg/g, '/images/covers/default-book.jpg');
fs.writeFileSync(booksDataPath, booksData);

const homeJsPath = path.join(__dirname, 'src', 'pages', 'Home.js');
let homeJS = fs.readFileSync(homeJsPath, 'utf8');
homeJS = homeJS.replace(/https:\/\/covers\.openlibrary\.org\/b\/isbn\/.*?-L\.jpg/g, '/images/covers/default-book.jpg');
homeJS = homeJS.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?.*?(?=")/g, '/images/backgrounds/home-about-bg.jpg');
fs.writeFileSync(homeJsPath, homeJS);
