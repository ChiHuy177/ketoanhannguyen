const fs = require('fs');

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

// Add Laptop to imports
if (!appContent.includes('Laptop,')) {
    appContent = appContent.replace(
        'RefreshCcw, ShoppingBag, Factory, HardHat, Store, UtensilsCrossed,',
        'RefreshCcw, ShoppingBag, Factory, HardHat, Store, UtensilsCrossed, Laptop,'
    );
}

// Replace SERVICES
const oldServicesRegex = /const SERVICES = \[\s*\{[\s\S]*?\}\s*\];\s*const QUESTIONS/;
const newServices = `const SERVICES = [
  { icon: Building2 },
  { icon: Calculator },
  { icon: ShieldCheck },
  { icon: Laptop },
  { icon: Globe2 },
  { icon: Settings2 },
];

const QUESTIONS`;
appContent = appContent.replace(oldServicesRegex, newServices);

// Replace serviceRefs
const oldRefs = `const serviceRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];`;
const newRefs = `const serviceRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];`;
appContent = appContent.replace(oldRefs, newRefs);

fs.writeFileSync('src/App.jsx', appContent);
