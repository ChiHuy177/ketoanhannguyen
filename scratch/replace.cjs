const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(/className="(text-[^"]+)\s+font-serif\s+text-dark\s+font-bold/g, 'className="$1 font-serif italic text-dark font-bold');
fs.writeFileSync('src/App.jsx', content);
