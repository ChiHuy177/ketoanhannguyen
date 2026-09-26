const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const oldNavRender = `<div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500 uppercase tracking-widest">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:inline-block bg-gold text-white px-6 py-2.5 text-sm uppercase tracking-wide font-medium hover:bg-yellow-600 transition">
            Liên hệ ngay
          </a>`;

const newNavRender = `<div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500 uppercase tracking-widest">
            {[
              { href: '#about', label: t[lang].nav.about },
              { href: '#services', label: t[lang].nav.services },
              { href: '#difference', label: lang === 'vi' ? 'Khác biệt' : 'Difference' },
              { href: '#customers', label: t[lang].nav.customers },
              { href: '#process', label: lang === 'vi' ? 'Quy trình' : 'Process' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="text-gray-500 font-bold px-3 py-1.5 border border-gray-200 rounded hover:text-gold hover:border-gold uppercase text-xs transition">
              {lang === 'vi' ? 'English' : 'Tiếng Việt'}
            </button>
            <a href="#contact" className="bg-gold text-white px-6 py-2.5 text-sm uppercase tracking-wide font-medium hover:bg-yellow-600 transition">
              {t[lang].nav.contact}
            </a>
          </div>`;

content = content.replace(oldNavRender, newNavRender);

fs.writeFileSync('src/App.jsx', content);
