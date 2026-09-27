const fs = require('fs');

// Update locales.js
let localesContent = fs.readFileSync('src/locales.js', 'utf8');

localesContent = localesContent.replace(
  /subtitle:\s*'Công ty TNHH Kế toán & Tư vấn Thuế'/g,
  "subtitle: 'Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn'"
);

localesContent = localesContent.replace(
  /role:\s*'Giám đốc – Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn'/g,
  "role: 'Giám đốc – Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn'"
);

fs.writeFileSync('src/locales.js', localesContent);

// Update App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');

appContent = appContent.replace(
  /Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn/g,
  "Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn"
);

fs.writeFileSync('src/App.jsx', appContent);
