const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

// Update locales for founder section (VI)
const oldFounderRegex = /founder:\s*\{\s*subtitle:\s*'Người sáng lập',\s*role:\s*'Giám đốc, Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn',\s*items:\s*\[(.|\n)*?\],\s*quote:\s*'"Tư vấn kế toán – thuế không chỉ là xử lý một bộ hồ sơ. Điều quan trọng là phải hiểu hoạt động thực tế của doanh nghiệp, xác định đúng bản chất giao dịch và xây dựng phương án phù hợp với quy định pháp luật."',/;

const newFounderData = `founder: {
      subtitle: 'Người sáng lập',
      role: 'Giám đốc – Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn',
      foundationTitle: 'NỀN TẢNG CHUYÊN MÔN',
      items: [
        'Cử nhân Kế toán – Kiểm toán',
        'Thạc sĩ Tài chính Ngân hàng',
        'Chứng chỉ Kế toán trưởng',
        'Chứng chỉ Đại lý thuế',
        'Kinh nghiệm 12 năm công tác tại cơ quan thuế cấp tỉnh hướng dẫn, kiểm soát hồ sơ kế toán, thuế của hàng ngàn doanh nghiệp với các loại hình khác nhau và từng trực tiếp tham gia đoàn kiểm tra của cơ quan thuế với vai trò là trưởng đoàn kiểm tra.',
        'Kinh nghiệm làm kế toán của doanh nghiệp nước ngoài, doanh nghiệp bán lẻ với chuỗi hơn 200 cửa hàng',
        'Có kinh nghiệm tư vấn, rà soát hồ sơ thuế và thiết lập hệ thống cho nhiều doanh nghiệp'
      ],
      extraRole: 'Là Giảng viên của nhiều lớp đào tạo Kế toán, thuế thực chiến.',
      quote: 'Với mong muốn: "Tư vấn kế toán – thuế không chỉ là xử lý một bộ hồ sơ. Điều quan trọng là phải hiểu hoạt động thực tế của doanh nghiệp, xác định đúng bản chất giao dịch và xây dựng phương án phù hợp với quy định pháp luật."',`;

localesContent = localesContent.replace(oldFounderRegex, newFounderData);

// Update English side as well
const oldFounderEnRegex = /founder:\s*\{\s*subtitle:\s*'Founder',\s*role:\s*'Director, Han Nguyen Accounting and Tax Consulting Co., Ltd.',\s*items:\s*\[(.|\n)*?\],\s*quote:\s*'"Accounting and tax consulting is not just about processing a set of records. The important thing is to understand the actual operations of the business, correctly identify the nature of transactions and build a plan in accordance with legal regulations."',/;

const newFounderEnData = `founder: {
      subtitle: 'Founder',
      role: 'Director – Han Nguyen Accounting and Tax Consulting Co., Ltd',
      foundationTitle: 'PROFESSIONAL BACKGROUND',
      items: [
        'Bachelor of Accounting – Auditing',
        'Master of Banking and Finance',
        'Chief Accountant Certificate',
        'Tax Agent Certificate',
        '12 years of experience working at the provincial tax authority guiding and controlling accounting and tax records for thousands of businesses of various types, and directly participating in tax audit teams as the team leader.',
        'Experience working as an accountant for foreign enterprises and retail businesses with a chain of over 200 stores',
        'Experienced in consulting, reviewing tax records and setting up systems for many businesses'
      ],
      extraRole: 'Lecturer for many practical accounting and tax training classes.',
      quote: 'With the desire: "Accounting and tax consulting is not just about processing a set of records. The important thing is to understand the actual operations of the business, correctly identify the nature of transactions and build a plan in accordance with legal regulations."',`;

localesContent = localesContent.replace(oldFounderEnRegex, newFounderEnData);

fs.writeFileSync('src/locales.js', localesContent);


// Now update App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const oldAppBlock = `<div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8">
              {t[lang].founder.items.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-gold pl-6 italic text-gray-500 leading-relaxed font-serif">
              {t[lang].founder.quote}
            </blockquote>`;

const newAppBlock = `<h3 className="font-bold text-dark mb-4 text-sm tracking-wide">{t[lang].founder.foundationTitle}</h3>
            <div className="flex flex-col gap-y-3 mb-6">
              {t[lang].founder.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-medium mb-6 italic">
              {t[lang].founder.extraRole}
            </p>

            <blockquote className="border-l-2 border-gold pl-6 italic text-gray-500 leading-relaxed font-serif">
              {t[lang].founder.quote}
            </blockquote>`;

appContent = appContent.replace(oldAppBlock, newAppBlock);

fs.writeFileSync('src/App.jsx', appContent);
