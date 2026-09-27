const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

// Update locales for diff section
localesContent = localesContent.replace(
  `diff: {\n      title: 'Điểm khác biệt'\n    },`,
  `diff: {\n      subtitle: 'Vì sao nên lựa chọn kế toán Hân Nguyễn',\n      title: 'Điểm khác biệt'\n    },`
);

localesContent = localesContent.replace(
  `diff: {\n      title: 'Difference'\n    },`,
  `diff: {\n      subtitle: 'Why choose Han Nguyen Accounting',\n      title: 'Difference'\n    },`
);

// If it failed because of spacing, let's just do a regex replace
if (!localesContent.includes('Vì sao nên lựa chọn kế toán Hân Nguyễn')) {
    localesContent = localesContent.replace(/diff:\s*\{\s*title:\s*'Điểm khác biệt'\s*\}/, "diff: {\n      subtitle: 'Vì sao nên lựa chọn kế toán Hân Nguyễn',\n      title: 'Điểm khác biệt'\n    }");
    localesContent = localesContent.replace(/diff:\s*\{\s*title:\s*'Difference'\s*\}/, "diff: {\n      subtitle: 'Why choose Han Nguyen Accounting',\n      title: 'Difference'\n    }");
}

fs.writeFileSync('src/locales.js', localesContent);

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const oldDiffStr = `<p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">{t[lang].diff.title}</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h2>`;

const newDiffStr = `<p className="text-dark font-bold text-xl uppercase tracking-wider mb-3">{t[lang].diff.subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h2>`;

appContent = appContent.replace(oldDiffStr, newDiffStr);
fs.writeFileSync('src/App.jsx', appContent);
