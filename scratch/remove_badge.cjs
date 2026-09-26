const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// The floating badge starts with {/* FLOATING DEGREES BADGE */}
// and ends with </div> just before </Reveal>
const startToken = '{/* FLOATING DEGREES BADGE */}';
const endToken = '          </Reveal>';

const startIndex = content.indexOf(startToken);
if (startIndex !== -1) {
  const endIndex = content.indexOf(endToken, startIndex);
  if (endIndex !== -1) {
    content = content.substring(0, startIndex) + content.substring(endIndex);
    fs.writeFileSync('src/App.jsx', content);
    console.log('Removed floating badge');
  } else {
    console.log('Could not find end token');
  }
} else {
  console.log('Could not find start token');
}
