const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

const diffViData = `diff: {
      subtitle: 'Vì sao nên lựa chọn kế toán Hân Nguyễn',
      title: 'Điểm khác biệt',
      intro1: 'Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn cung cấp các giải pháp về thành lập doanh nghiệp, hộ kinh doanh, tư vấn kế toán, thuế và tư vấn doanh nghiệp, đồng hành cùng doanh nghiệp từ khi thành lập, xây dựng hệ thống kế toán đến quá trình vận hành và làm việc với cơ quan quản lý thuế.',
      intro2: 'Chúng tôi không định hướng dịch vụ theo cách đơn thuần là “nhận số liệu – kê khai – lập báo cáo”.',
      intro3: 'Mục tiêu của Hân Nguyễn là:',
      intro4: 'THIẾT LẬP MỘT HỆ THỐNG KẾ TOÁN HOÀN CHỈNH VÀ THÔNG SUỐT CHO DOANH NGHIỆP TỪ NỘI BỘ ĐẾN TỜ KHAI BÁO CÁO ĐẦY ĐỦ NHẤT PHỤC VỤ CHO CÔNG TÁC THANH TRA KIỂM TRA',
      intro5: 'Với phương châm:',
      intro6: 'TUÂN THỦ ĐÚNG – AN TÂM PHÁT TRIỂN'
    },`;

const diffEnData = `diff: {
      subtitle: 'Why choose Han Nguyen Accounting',
      title: 'Difference',
      intro1: 'Han Nguyen Accounting and Tax Consulting Co., Ltd. provides solutions for business establishment, household business, accounting consulting, tax and business consulting, accompanying businesses from establishment, building accounting systems to the operation process and working with tax management agencies.',
      intro2: 'We do not orient our services simply as "receiving data - declaring - reporting".',
      intro3: 'Han Nguyen\\'s goal is:',
      intro4: 'TO ESTABLISH A COMPLETE AND SMOOTH ACCOUNTING SYSTEM FOR BUSINESSES FROM INTERNAL TO THE MOST COMPLETE REPORTS AND DECLARATIONS SERVING INSPECTION AND AUDIT WORK',
      intro5: 'With the motto:',
      intro6: 'PROPER COMPLIANCE - PEACE OF MIND TO DEVELOP'
    },`;

localesContent = localesContent.replace(/diff:\s*\{[\s\S]*?title:\s*'Điểm khác biệt'\s*\},/g, diffViData);
localesContent = localesContent.replace(/diff:\s*\{[\s\S]*?title:\s*'Difference'\s*\},/g, diffEnData);

fs.writeFileSync('src/locales.js', localesContent);


let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const oldDiffStr = `<Reveal className="text-center mb-16">
            <p className="text-dark font-bold text-xl uppercase tracking-wider mb-3">{t[lang].diff.subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h2>
          </Reveal>`;

const newDiffStr = `<Reveal className="text-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-dark font-black text-3xl md:text-4xl uppercase tracking-widest mb-10">{t[lang].diff.subtitle}</h2>
            
            <div className="bg-white border-t-4 border-gold p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-left relative z-10 mb-20">
              <p className="text-gray-700 text-[1.1rem] leading-relaxed mb-5 text-justify">{t[lang].diff.intro1}</p>
              <p className="text-gray-700 text-[1.1rem] leading-relaxed mb-8 italic text-justify font-medium">{t[lang].diff.intro2}</p>
              
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm text-center">
                <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">{t[lang].diff.intro3}</p>
                <p className="text-gold font-bold text-xl md:text-2xl uppercase leading-snug mb-8 font-sans">{t[lang].diff.intro4}</p>
                
                <div className="w-16 h-[2px] bg-gold/30 mx-auto mb-8"></div>
                
                <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">{t[lang].diff.intro5}</p>
                <p className="text-dark font-black text-2xl md:text-3xl uppercase tracking-widest">{t[lang].diff.intro6}</p>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h3>
          </Reveal>`;

appContent = appContent.replace(oldDiffStr, newDiffStr);
fs.writeFileSync('src/App.jsx', appContent);
