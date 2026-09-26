const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

const additionalData = `
export const STARTING_POINTS_DATA = {
  vi: [
    ['Doanh nghiệp chưa thành lập', 'Tư vấn mô hình và thủ tục ban đầu'],
    ['Doanh nghiệp mới thành lập', 'Thiết lập hệ thống kế toán, thuế'],
    ['Doanh nghiệp đang hoạt động', 'Kế toán, thuế định kỳ'],
    ['Doanh nghiệp có số liệu chưa rõ', 'Rà soát và chuẩn hóa'],
    ['Doanh nghiệp có rủi ro thuế', 'Phân tích và đề xuất hướng xử lý'],
    ['Doanh nghiệp chuẩn bị thanh, kiểm tra', 'Rà soát hồ sơ và hỗ trợ giải trình'],
    ['Doanh nghiệp có nhà đầu tư nước ngoài', 'Đồng hành về kế toán, thuế và hồ sơ liên quan'],
  ],
  en: [
    ['Pre-establishment', 'Consulting on business model and procedures'],
    ['Newly established', 'Setting up accounting and tax systems'],
    ['Operating businesses', 'Periodic accounting and tax services'],
    ['Unclear financial data', 'Review and standardize records'],
    ['Tax risks identified', 'Analyze and propose solutions'],
    ['Preparing for tax audit', 'Review records and support explanation'],
    ['Foreign-invested enterprises', 'Comprehensive support on accounting and tax'],
  ]
};

export const COMMITMENTS_DATA = {
  vi: [
    { title: 'Minh bạch', desc: 'Trong phạm vi công việc, hồ sơ và chi phí dịch vụ.' },
    { title: 'Chính xác', desc: 'Trong nghiệp vụ kế toán và thuế.' },
    { title: 'Đúng quy định', desc: 'Trong tư vấn và xử lý hồ sơ.' },
    { title: 'Chủ động', desc: 'Trong việc nhận diện và cảnh báo rủi ro.' },
    { title: 'Đồng hành', desc: 'Cùng doanh nghiệp trong quá trình hoạt động.' },
  ],
  en: [
    { title: 'Transparency', desc: 'In scope of work, records, and service fees.' },
    { title: 'Accuracy', desc: 'In accounting and tax operations.' },
    { title: 'Compliance', desc: 'In consulting and record processing.' },
    { title: 'Proactive', desc: 'In identifying and warning about risks.' },
    { title: 'Companionship', desc: 'Accompanying the business throughout its operations.' },
  ]
};
`;

if (!localesContent.includes('STARTING_POINTS_DATA')) {
  fs.writeFileSync('src/locales.js', localesContent + additionalData);
}

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

// Update imports
appContent = appContent.replace(
  "import { content as t, SERVICES_DATA, PROCESS_DATA, CUSTOMERS_DATA, DIFFERENTIATORS_DATA } from './locales.js';",
  "import { content as t, SERVICES_DATA, PROCESS_DATA, CUSTOMERS_DATA, DIFFERENTIATORS_DATA, STARTING_POINTS_DATA, COMMITMENTS_DATA } from './locales.js';"
);

// Founder
appContent = appContent.replace(
  `              {[
                '{t[lang].founder.deg1}',
                'Chứng chỉ Kế toán trưởng',
                'Chứng chỉ Đại lý thuế',
                'Từng đảm nhiệm Trưởng đoàn kiểm tra',
                'Rà soát hồ sơ thuế cho nhiều doanh nghiệp',
                'Kinh nghiệm với doanh nghiệp có yếu tố nước ngoài',
              ].map((item) => (`,
  `              {t[lang].founder.items.map((item) => (`
);
appContent = appContent.replace(
  `<p className="text-xs tracking-widest text-gray-500 uppercase mt-2">Năm kinh nghiệm thuế</p>`,
  `<p className="text-xs tracking-widest text-gray-500 uppercase mt-2">{t[lang].founder.expText}</p>`
);

// Difference
appContent = appContent.replace(
  `<p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">Vì sao chọn Hân Nguyễn</p>`,
  `<p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">{t[lang].diff.title}</p>`
);
appContent = appContent.replace(
  `<h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold">Điểm khác biệt</h2>`,
  `<h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h2>`
);

// Customers
appContent = appContent.replace(
  `<p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">Phù hợp với</p>`,
  `<p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">{lang === 'vi' ? 'Phù hợp với' : 'Suitable for'}</p>`
);

// Process
appContent = appContent.replace(
  `{STARTING_POINTS.map(([left, right]) => (`,
  `{STARTING_POINTS_DATA[lang].map(([left, right]) => (`
);

// Commitments
appContent = appContent.replace(
  `<h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold mb-4">Cam kết của chúng tôi</h2>`,
  `<h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold mb-4">{t[lang].commit.title}</h2>`
);
appContent = appContent.replace(
  `<p className="text-gray-500">Hân Nguyễn hướng đến việc xây dựng mối quan hệ lâu dài với doanh nghiệp trên cơ sở:</p>`,
  `<p className="text-gray-500">{lang === 'vi' ? 'Hân Nguyễn hướng đến việc xây dựng mối quan hệ lâu dài với doanh nghiệp trên cơ sở:' : 'Han Nguyen aims to build long-term relationships with businesses based on:'}</p>`
);
appContent = appContent.replace(
  `{COMMITMENTS.map((c, i) => {`,
  `{COMMITMENTS_DATA[lang].map((c, i) => { c.icon = COMMITMENTS[i].icon; return c; }).map((c, i) => {`
);

// Footer
appContent = appContent.replace(
  `Doanh nghiệp tập trung vào kinh doanh. Hân Nguyễn đồng hành phía sau để hệ thống kế toán – thuế được vận hành đúng và kiểm soát được rủi ro.`,
  `{lang === 'vi' ? 'Doanh nghiệp tập trung vào kinh doanh. Hân Nguyễn đồng hành phía sau để hệ thống kế toán – thuế được vận hành đúng và kiểm soát được rủi ro.' : 'Businesses focus on growth. Han Nguyen supports behind the scenes to ensure the accounting and tax system operates correctly and risks are controlled.'}`
);
appContent = appContent.replace(
  `"Tuân thủ đúng – Yên tâm phát triển"`,
  `{lang === 'vi' ? '"Tuân thủ đúng – Yên tâm phát triển"' : '"Proper compliance – Assured growth"'}`
);
appContent = appContent.replace(
  `<h4 className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-6">Thông tin liên hệ</h4>`,
  `<h4 className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-6">{t[lang].contact.title}</h4>`
);
appContent = appContent.replace(
  `Nguyễn Thị Ngọc Hân (Giám đốc / Kế toán trưởng)`,
  `{lang === 'vi' ? 'Nguyễn Thị Ngọc Hân (Giám đốc / Kế toán trưởng)' : 'Nguyen Thi Ngoc Han (Director / Chief Accountant)'}`
);
appContent = appContent.replace(
  `Đã nhận được yêu cầu của bạn. Hân Nguyễn sẽ liên hệ lại sớm nhất.`,
  `{t[lang].contact.success}`
);
appContent = appContent.replace(
  `Để lại số điện thoại, chúng tôi sẽ gọi lại`,
  `{lang === 'vi' ? 'Để lại số điện thoại, chúng tôi sẽ gọi lại' : 'Leave your phone number, we will call back'}`
);
appContent = appContent.replace(
  `Nhận tư vấn ngay`,
  `{lang === 'vi' ? 'Nhận tư vấn ngay' : 'Get Consultation'}`
);

fs.writeFileSync('src/App.jsx', appContent);
