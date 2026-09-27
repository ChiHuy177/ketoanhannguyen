const fs = require('fs');

const path = 'd:/Github/NgocHanP/src/App.jsx';
let content = fs.readFileSync(path, 'utf8');

// Use regex to capture sections
const aboutRegex = /\s*\{\/\* ABOUT SECTION \*\/\}[\s\S]*?<\/section>/;
const servicesRegex = /\s*\{\/\* SERVICES SECTION \*\/\}[\s\S]*?<\/section>/;
const heroRegex = /(<\/section>)(?=\s*\{\/\* (ABOUT|DIFFERENCE|SERVICES) SECTION \*\/\}|$)/;

// Extract services section
const servicesMatch = content.match(servicesRegex);
if (!servicesMatch) {
  console.log("Could not find SERVICES section");
  process.exit(1);
}
const servicesContent = servicesMatch[0];

// Remove services section from original place
content = content.replace(servicesRegex, '');

// Remove about section completely
content = content.replace(aboutRegex, '');

// Insert services section right after the HERO SECTION
// The HERO SECTION ends at the first `</section>` before ABOUT or DIFFERENCE
// Since we removed ABOUT, the next one is DIFFERENCE.
const heroEndRegex = /(\{\/\* HERO SECTION \*\/\}[\s\S]*?<\/section>)/;
content = content.replace(heroEndRegex, `$1${servicesContent}`);

fs.writeFileSync(path, content, 'utf8');
console.log("Done");
