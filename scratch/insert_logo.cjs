const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const targetStr = `<p className="text-gold font-medium tracking-widest uppercase mb-4 text-sm">`;

const logoBlock = `
            {/* LOGO BLOCK - RECREATING THE SIGN */}
            <div className="flex items-center gap-6 mb-10 mt-4 scale-90 md:scale-100 origin-left">
              {/* Left: HN Logo with L-border */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-[110%] h-[90%] border-t-[3px] border-l-[3px] border-[#A67C00] -translate-x-3 -translate-y-3"></div>
                <img src={logo} alt="HN" className="h-[4.5rem] w-auto object-contain relative z-10" />
              </div>

              {/* Right: Text block */}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[1.75rem] font-bold font-serif text-[#A67C00] leading-[1.1] tracking-widest uppercase text-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  Kế toán<br />
                  Hân Nguyễn
                </h2>
                <div className="w-full h-[1.5px] bg-[#A67C00] my-2"></div>
                <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-1 text-center whitespace-nowrap">
                  Tuân thủ đúng - Yên tâm phát triển
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-900 tracking-wider">
                  <Phone size={12} className="text-dark" />
                  0989 772 101
                </div>
              </div>
            </div>

            `;

content = content.replace(targetStr, logoBlock + targetStr);
fs.writeFileSync('src/App.jsx', content);
