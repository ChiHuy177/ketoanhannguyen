const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const oldBlockRegex = /\{\/\* LOGO BLOCK - RECREATING THE SIGN \*\/\}(.|\n)*?<\/div>\s*<\/div>\s*<\/div>/;

const newBlock = `{/* LOGO BLOCK - RECREATING THE SIGN */}
            <div className="flex items-center gap-6 mb-12 mt-4 scale-90 md:scale-100 origin-left">
              {/* Left: HN Logo with precise L-border drawn OVER the image's transparent padding */}
              <div className="relative">
                {/* Top horizontal line */}
                <div className="absolute top-[18%] left-[12%] w-[65%] h-[3px] bg-[#A67C00] z-20"></div>
                {/* Left vertical line */}
                <div className="absolute top-[18%] left-[12%] w-[3px] h-[85%] bg-[#A67C00] z-20"></div>
                <img src={logo} alt="HN" className="h-48 w-auto object-contain relative z-10" />
              </div>

              {/* Right: Text block */}
              <div className="flex flex-col items-center justify-center -mt-2">
                <div className="flex flex-col items-center text-[#A67C00]" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.15)' }}>
                  <span className="text-[2rem] font-black font-sans leading-none tracking-widest uppercase">Kế toán</span>
                  <span className="text-[2.25rem] font-black font-sans leading-[1.1] tracking-widest uppercase mt-1">Hân Nguyễn</span>
                </div>
                <div className="w-[110%] h-[1.5px] bg-[#A67C00] mt-3 mb-2"></div>
                <p className="text-[11.5px] font-bold text-gray-600 uppercase tracking-[0.15em] mb-2 text-center whitespace-nowrap">
                  Tuân thủ đúng - Yên tâm phát triển
                </p>
                <div className="flex items-center justify-center gap-2 text-[15px] font-bold text-[#A67C00] tracking-wider">
                  <Phone size={16} className="fill-[#A67C00]" />
                  0989 772 101
                </div>
              </div>
            </div>`;

content = content.replace(oldBlockRegex, newBlock);
fs.writeFileSync('src/App.jsx', content);
