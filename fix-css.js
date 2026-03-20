const fs = require('fs');
const path = require('path');

// 1. Create directory
fs.mkdirSync('src/assets/backgrounds', { recursive: true });

// 2. Move CSS backgrounds to src/assets
const cssBgFiles = ['auth-bg.jpg', 'home-bg.jpg', 'login-bg.jpg', 'register-bg.jpg'];

for (const file of cssBgFiles) {
  const oldPath = path.join('public/images/backgrounds', file);
  const newPath = path.join('src/assets/backgrounds', file);
  if (fs.existsSync(oldPath)) {
    // Copy them so they exist for CSS Webpack resolving
    fs.copyFileSync(oldPath, newPath);
  }
}

// 3. Update CSS files
const updates = [
  { file: 'src/pages/styles/Auth.css', target: '/images/backgrounds/auth-bg.jpg', replacement: '../../assets/backgrounds/auth-bg.jpg' },
  { file: 'src/pages/styles/Home.css', target: '/images/backgrounds/home-bg.jpg', replacement: '../../assets/backgrounds/home-bg.jpg' },
  { file: 'src/pages/styles/Login.css', target: '/images/backgrounds/login-bg.jpg', replacement: '../../assets/backgrounds/login-bg.jpg' },
  { file: 'src/pages/styles/Register.css', target: '/images/backgrounds/register-bg.jpg', replacement: '../../assets/backgrounds/register-bg.jpg' }
];

for (const update of updates) {
  let content = fs.readFileSync(update.file, 'utf8');
  content = content.replace(update.target, update.replacement);
  fs.writeFileSync(update.file, content);
}
console.log('Fixed Webpack CSS url() paths!');
