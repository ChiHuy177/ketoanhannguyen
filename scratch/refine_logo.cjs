const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const oldBlock = `            {/* LOGO BLOCK - RECREATING THE SIGN */}
            <div className="flex items-center gap-6 mb-10 mt-4 scale-90 md:scale-100 origin-left">
              {/* Left: HN Logo with L-border */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-[110%] h-[90%] border-t-[3px] border-l-[3px] border-[#A67C00] -translate-x-3 -translate-y-3"></div>
                <img src={logo} alt="HN" className="h-36 w-auto object-contain relative z-10" />
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
            </div>`;

const newBlock = `            {/* LOGO BLOCK - RECREATING THE SIGN */}
            <div className="flex items-center gap-8 mb-12 mt-4 scale-90 md:scale-100 origin-left">
              {/* Left: HN Logo with precise L-border */}
              <div className="relative pt-4 pl-5">
                {/* Top horizontal line of L-border (shorter) */}
                <div className="absolute top-0 left-0 w-[80%] h-[3px] bg-[#A67C00]"></div>
                {/* Left vertical line of L-border (longer, extending past bottom) */}
                <div className="absolute top-0 left-0 w-[3px] h-[125%] bg-[#A67C00]"></div>
                <img src={logo} alt="HN" className="h-36 w-auto object-contain relative z-10" />
              </div>

              {/* Right: Text block */}
              <div className="flex flex-col items-center justify-center -mt-2">
                <h2 className="text-[2.25rem] font-black font-sans text-[#A67C00] leading-[1.15] tracking-[0.05em] uppercase text-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.15)' }}>
                  Kế toán<br />
                  Hân Nguyễn
                </h2>
                <div className="w-[105%] h-[1.5px] bg-[#A67C00] mt-3 mb-2"></div>
                <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5 text-center whitespace-nowrap">
                  Tuân thủ đúng - Yên tâm phát triển
                </p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#A67C00] tracking-wider">
                  <Phone size={14} className="fill-[#A67C00]" />
                  0989 772 101
                </div>
              </div>
            </div>`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('src/App.jsx', content);
