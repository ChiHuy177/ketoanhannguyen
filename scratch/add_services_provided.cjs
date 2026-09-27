const fs = require('fs');

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const targetStr = `          <Reveal className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto mb-20" delay={80}>
            {QUESTIONS.map((q) => (
              <div key={q} className="flex items-start gap-3">
                <ArrowRight size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-gray-500 text-sm">{q}</p>
              </div>
            ))}
          </Reveal>`;

const replacementStr = `          <Reveal className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto mb-20" delay={80}>
            {QUESTIONS.map((q) => (
              <div key={q} className="flex items-start gap-3">
                <ArrowRight size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-gray-500 text-sm">{q}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="text-center mt-24 mb-12">
            <h3 className="text-3xl md:text-4xl font-serif italic text-gold font-bold">{t[lang].system.subtitle}</h3>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t[lang].system.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} className="bg-off-white border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center font-bold font-serif text-xl border border-gold/20 shrink-0">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-dark text-lg uppercase tracking-wide">{item.title}</h4>
                </div>
                <p className="text-gray-500 leading-relaxed pl-16">{item.desc}</p>
              </Reveal>
            ))}
          </div>`;

appContent = appContent.replace(targetStr, replacementStr);
fs.writeFileSync('src/App.jsx', appContent);
