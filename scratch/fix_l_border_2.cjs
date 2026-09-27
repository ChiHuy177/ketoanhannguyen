const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const oldBlock = `{/* Top horizontal line */}
                <div className="absolute top-[18%] left-[12%] w-[65%] h-[3px] bg-[#A67C00] z-20"></div>
                {/* Left vertical line */}
                <div className="absolute top-[18%] left-[12%] w-[3px] h-[85%] bg-[#A67C00] z-20"></div>`;

const newBlock = `{/* Top horizontal line */}
                <div className="absolute top-[13%] left-[4%] w-[68%] h-[3px] bg-[#A67C00] z-20"></div>
                {/* Left vertical line */}
                <div className="absolute top-[13%] left-[4%] w-[3px] h-[82%] bg-[#A67C00] z-20"></div>`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('src/App.jsx', content);
