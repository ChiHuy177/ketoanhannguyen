const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes("import heroImg from './assets/hero-img.jpg';")) {
  content = content.replace(
    "import directorImg from './assets/director.png';",
    "import heroImg from './assets/hero-img.jpg';\nimport directorImg from './assets/director.png';"
  );
}

// Replace the image source
content = content.replace(
  'src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"',
  'src={heroImg}'
);

fs.writeFileSync('src/App.jsx', content);
