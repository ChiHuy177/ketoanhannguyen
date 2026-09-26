const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const targetSection = `        <Reveal className="max-w-7xl mx-auto px-6 mt-24" delay={200}>
          <div className="border-t border-gray-100 pt-16">
            <h3 className="text-2xl font-serif italic text-gold font-bold mb-10 text-center">Bằng Cấp & Chứng Nhận</h3>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-off-white p-4 border border-gray-100 shadow-sm">
                <div className="border border-gold/30 p-2 bg-white">
                  <img src={bangCuNhan} alt="Bằng Cử nhân Kế toán" className="w-full h-auto object-contain" />
                </div>
                <p className="text-center mt-5 text-sm font-bold text-dark uppercase tracking-widest">Cử nhân Kế toán, Kiểm toán</p>
              </div>
              <div className="bg-off-white p-4 border border-gray-100 shadow-sm">
                <div className="border border-gold/30 p-2 bg-white">
                  <img src={bangThacSi} alt="Bằng Thạc sĩ" className="w-full h-auto object-contain" />
                </div>
                <p className="text-center mt-5 text-sm font-bold text-dark uppercase tracking-widest">Thạc sĩ</p>
              </div>
            </div>
          </div>
        </Reveal>`;

const replacementSection = `        <Reveal className="max-w-7xl mx-auto px-6 mt-24" delay={200}>
          <div className="border-t border-gray-100 pt-16">
            <h3 className="text-3xl font-serif italic text-gold font-bold mb-12 text-center">Bằng Cấp & Chứng Nhận</h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-6 shadow-2xl rounded-sm border border-gold/20 relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 border border-gold/50 m-2 pointer-events-none rounded-sm"></div>
                <div className="relative border border-gold/20 bg-gray-50 p-4 shadow-inner">
                  <img src={bangCuNhan} alt="Bằng Cử nhân Kế toán" className="w-full h-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-center mt-6 text-sm font-bold text-dark uppercase tracking-widest font-serif relative z-10">Cử nhân Kế toán, Kiểm toán</p>
                <div className="w-12 h-px bg-gold/50 mx-auto mt-3"></div>
              </div>
              
              <div className="bg-white p-6 shadow-2xl rounded-sm border border-gold/20 relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 border border-gold/50 m-2 pointer-events-none rounded-sm"></div>
                <div className="relative border border-gold/20 bg-gray-50 p-4 shadow-inner">
                  <img src={bangThacSi} alt="Bằng Thạc sĩ" className="w-full h-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-center mt-6 text-sm font-bold text-dark uppercase tracking-widest font-serif relative z-10">Thạc sĩ</p>
                <div className="w-12 h-px bg-gold/50 mx-auto mt-3"></div>
              </div>
            </div>
          </div>
        </Reveal>`;

content = content.replace(targetSection, replacementSection);
fs.writeFileSync('src/App.jsx', content);
