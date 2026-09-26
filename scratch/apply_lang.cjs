const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add imports and lang state
content = content.replace("import logo from './assets/HN_logo.png';", "import logo from './assets/HN_logo.png';\nimport { content as t, SERVICES_DATA, PROCESS_DATA, CUSTOMERS_DATA, DIFFERENTIATORS_DATA } from './locales.js';");
content = content.replace("const [submitted, setSubmitted] = useState(false);", "const [submitted, setSubmitted] = useState(false);\n  const [lang, setLang] = useState('vi');");

// 2. Add Lang Toggle in Nav
const oldNav = `<a href="#contact" className="bg-dark text-white px-5 py-2.5 text-sm uppercase tracking-wider hover:bg-gray-800 transition">
              Liên hệ tư vấn
            </a>`;
const newNav = `<button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="text-gray-500 font-bold px-3 py-2 border border-gray-200 rounded hover:text-gold uppercase text-sm">
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <a href="#contact" className="bg-dark text-white px-5 py-2.5 text-sm uppercase tracking-wider hover:bg-gray-800 transition">
              {t[lang].nav.contact}
            </a>`;
content = content.replace(oldNav, newNav);

// 3. Replace Data Arrays usages
content = content.replace(/\{SERVICES\.map/g, "{SERVICES_DATA[lang].map((s, i) => { s.icon = SERVICES[i].icon; return s; }).map");
content = content.replace(/\{PROCESS\.map/g, "{PROCESS_DATA[lang].map");
content = content.replace(/\{CUSTOMERS\.map/g, "{CUSTOMERS_DATA[lang].map((c, i) => { c.icon = CUSTOMERS[i].icon; return c; }).map");
content = content.replace(/\{DIFFERENTIATORS\.map/g, "{DIFFERENTIATORS_DATA[lang].map((d, i) => { d.icon = DIFFERENTIATORS[i].icon; return d; }).map");

// 4. Hero Section
content = content.replace('Công ty TNHH Kế toán & Tư vấn Thuế', '{t[lang].hero.subtitle}');
content = content.replace('Kế toán. Thuế. <br />', '{t[lang].hero.title1} <br />');
content = content.replace('Tư vấn doanh nghiệp.', '{t[lang].hero.title2}');
content = content.replace('Tuân thủ đúng – Yên tâm phát triển. Chúng tôi không chỉ nhận số liệu để lập báo cáo, chúng tôi thiết lập một hệ thống kế toán hoàn chỉnh và thông suốt cho doanh nghiệp.', '{t[lang].hero.desc}');
content = content.replace('Khám phá dịch vụ', '{t[lang].hero.btnPrimary}');

// 5. System Section
content = content.replace('Xây dựng hệ thống – Không chỉ làm báo cáo.', '{t[lang].system.title}');
content = content.replace(/>Làm đúng từ đầu</g, '>{t[lang].system.items[0].title}<');
content = content.replace(/>Hệ thống chuẩn hóa giúp hạn chế rủi ro pháp lý.</g, '>{t[lang].system.items[0].desc}<');
content = content.replace(/>Chủ động kiểm soát</g, '>{t[lang].system.items[1].title}<');
content = content.replace(/>Nhận diện vấn đề trước khi cơ quan thuế thanh tra.</g, '>{t[lang].system.items[1].desc}<');
content = content.replace(/>Thiết kế luồng tài liệu/g, '>{t[lang].system.items[2].title}');
content = content.replace(/>Xây dựng luồng luân chuyển chứng từ minh bạch, rõ ràng.</g, '>{t[lang].system.items[2].desc}<');

// 6. Founder Section
content = content.replace('Người sáng lập', '{t[lang].founder.subtitle}');
content = content.replace('Giám đốc, Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn', '{t[lang].founder.role}');
content = content.replace('"Tư vấn kế toán – thuế không chỉ là xử lý một bộ hồ sơ. Điều quan trọng là phải hiểu hoạt động thực tế của doanh nghiệp, xác định đúng bản chất giao dịch và xây dựng phương án phù hợp với quy định pháp luật."', '{t[lang].founder.quote}');
content = content.replace('Bằng Cấp & Chứng Nhận', '{t[lang].founder.degrees}');
content = content.replace('Bằng Cử nhân Kế toán', '{t[lang].founder.deg1}');
content = content.replace('Cử nhân Kế toán, Kiểm toán', '{t[lang].founder.deg1}');
content = content.replace(/>Thạc sĩ</g, '>{t[lang].founder.deg2}<');
content = content.replace('Bằng Thạc sĩ', '{t[lang].founder.deg2}');

// 7. Services Section
content = content.replace('Chuyên môn của chúng tôi', '{t[lang].servicesSection.subtitle}');
content = content.replace('Dịch vụ cốt lõi', '{t[lang].servicesSection.title}');

// 8. Process Section
content = content.replace('Quy trình làm việc minh bạch', '{t[lang].process.title}');
content = content.replace('Hân Nguyễn đồng hành từ đâu?', '{t[lang].process.start}');

// 9. Customers Section
content = content.replace('Đối tượng khách hàng', '{t[lang].customers.title}');
content = content.replace('Dịch vụ được cá nhân hóa cho từng loại hình và quy mô hoạt động.', '{t[lang].customers.desc}');

// 10. Nav links
content = content.replace(/>Giới thiệu</g, '>{t[lang].nav.about}<');
content = content.replace(/>Dịch vụ</g, '>{t[lang].nav.services}<');
content = content.replace(/>Khách hàng</g, '>{t[lang].nav.customers}<');

fs.writeFileSync('src/App.jsx', content);
