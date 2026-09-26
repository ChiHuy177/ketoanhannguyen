const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// We look for elements that match className="text-X font-serif italic text-gold font-bold"
content = content.replace(/className="(text-2xl)\s+font-serif\s+italic\s+text-gold\s+font-bold/g, 'className="text-3xl md:text-4xl font-serif italic text-gold font-bold');
content = content.replace(/className="(text-3xl)\s+font-serif\s+italic\s+text-gold\s+font-bold/g, 'className="text-4xl md:text-5xl font-serif italic text-gold font-bold');
content = content.replace(/className="(text-4xl)\s+font-serif\s+italic\s+text-gold\s+font-bold/g, 'className="text-5xl md:text-6xl font-serif italic text-gold font-bold');

fs.writeFileSync('src/App.jsx', content);
