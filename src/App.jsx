import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Phone, MapPin, User, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Calculator, Settings2, ShieldCheck, Building2, Globe2,
  Scale, Compass, SearchCheck, Handshake,
  RefreshCcw, ShoppingBag, Factory, HardHat, Store, UtensilsCrossed, Laptop,
  Eye, Target, Zap, TriangleAlert,
} from 'lucide-react';
import logo from './assets/HN_logo.png';
import { content as t, SERVICES_DATA, PROCESS_DATA, CUSTOMERS_DATA, DIFFERENTIATORS_DATA, STARTING_POINTS_DATA, COMMITMENTS_DATA } from './locales.js';
import heroImg from './assets/hero-img.jpg';
import directorImg from './assets/director.png';
import bangCuNhan from './assets/bang_cu_nhan.png';
import bangThacSi from './assets/bang_thac_si.png';
import bangKhen1 from './assets/bangkhen_1.png';

/* ---------------------------------------------------------------------
   Reveal: lightweight IntersectionObserver fade-in.
--------------------------------------------------------------------- */
function useRevealRef(threshold = 0.18) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  const ref = useRevealRef();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

function PhotoPending({ label, ratio = 'aspect-[4/5]' }) {
  return (
    <div className={`photo-pending ${ratio} w-full rounded-sm flex flex-col items-center justify-center text-center px-6`}>
      <img src={logo} alt="" className="mark w-16 h-16 object-contain mb-4" />
      <p className="text-xs uppercase tracking-[0.16em] text-gold font-semibold">{label}</p>
      <p className="text-[11px] text-gray-500 mt-1">Ảnh thực tế sẽ được cập nhật</p>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Data
--------------------------------------------------------------------- */
const NAV = [
  { href: '#services', label: 'Dịch vụ' },
  { href: '#difference', label: 'Khác biệt' },
  { href: '#founder', label: 'Người sáng lập' },
  { href: '#process', label: 'Quy trình' },
];

const SERVICES = [
  { icon: Building2 },
  { icon: Calculator },
  { icon: ShieldCheck },
  { icon: Laptop },
  { icon: Globe2 },
  { icon: Settings2 },
];

const QUESTIONS = [
  'Doanh thu đã được ghi nhận đúng chưa?',
  'Chi phí có đủ hồ sơ và điều kiện được tính vào chi phí được trừ không?',
  'Công nợ có được kiểm soát không?',
  'Dòng tiền có khớp với doanh thu và chứng từ không?',
  'Hóa đơn có rủi ro gì không?',
  'Báo cáo tài chính có phản ánh đúng hoạt động của doanh nghiệp không?',
];

const DIFFERENTIATORS = [
  { icon: Scale, title: 'Hiểu Quy Định', desc: 'Tư vấn dựa trên hệ thống pháp luật về kế toán, thuế và hồ sơ thực tế.' },
  { icon: Compass, title: 'Hiểu Hoạt Động', desc: 'Không áp dụng một phương án giống nhau cho mọi doanh nghiệp.' },
  { icon: SearchCheck, title: 'Chủ Động Nhận Diện', desc: 'Phát hiện vấn đề trong quá trình vận hành thay vì chờ thanh tra.' },
  { icon: Settings2, title: 'Xây Dựng Hệ Thống', desc: 'Không chỉ xử lý số liệu cuối kỳ mà hướng đến quy trình vận hành liên tục.' },
  { icon: Handshake, title: 'Đồng Hành', desc: 'Hỗ trợ phân tích hồ sơ, chuẩn bị tài liệu và giải trình khi có vấn đề.' },
];

const CUSTOMERS = [
  { icon: Building2, title: 'Doanh nghiệp mới thành lập', desc: 'Từ thủ tục ban đầu đến thiết lập hệ thống kế toán, thuế.' },
  { icon: RefreshCcw, title: 'Doanh nghiệp đang hoạt động', desc: 'Rà soát, chuẩn hóa và tổ chức lại hệ thống kế toán.' },
  { icon: ShoppingBag, title: 'Doanh nghiệp thương mại', desc: 'Quản lý doanh thu, giá vốn, hàng tồn kho, công nợ và hóa đơn.' },
  { icon: Factory, title: 'Doanh nghiệp sản xuất', desc: 'Theo dõi nguyên vật liệu, giá thành, chi phí sản xuất và báo cáo tài chính.' },
  { icon: HardHat, title: 'Doanh nghiệp xây dựng', desc: 'Quản lý hợp đồng, doanh thu, chi phí, nghiệm thu và hồ sơ thanh toán.' },
  { icon: Store, title: 'Chuỗi bán lẻ', desc: 'Kiểm soát doanh thu, tiền mặt, hệ thống POS, hóa đơn và dòng tiền.' },
  { icon: UtensilsCrossed, title: 'Nhà hàng, khách sạn', desc: 'Thiết lập quy trình doanh thu, chi phí, nhân sự và thuế.' },
  { icon: Globe2, title: 'Doanh nghiệp có yếu tố nước ngoài', desc: 'Hỗ trợ kế toán, thuế và hồ sơ liên quan trong quá trình hoạt động.' },
];

const PROCESS = [
  { title: 'Tiếp nhận', desc: 'Tìm hiểu ngành nghề, quy mô, mô hình.' },
  { title: 'Phân tích', desc: 'Xác định vấn đề về kế toán, chứng từ và quy trình.' },
  { title: 'Đánh giá', desc: 'Xác định rủi ro và nội dung cần xử lý.' },
  { title: 'Đề xuất', desc: 'Đưa ra phương án phù hợp với nhu cầu doanh nghiệp.', active: true },
  { title: 'Thực hiện', desc: 'Thiết lập hệ thống và thực hiện công việc kế toán.' },
  { title: 'Rà soát', desc: 'Kiểm tra số liệu, chứng từ và nghĩa vụ thuế.' },
  { title: 'Cảnh báo', desc: 'Chủ động rà soát và thông tin rủi ro cần xử lý.' },
];

const STARTING_POINTS = [
  ['Doanh nghiệp chưa thành lập', 'Tư vấn mô hình và thủ tục ban đầu'],
  ['Doanh nghiệp mới thành lập', 'Thiết lập hệ thống kế toán, thuế'],
  ['Doanh nghiệp đang hoạt động', 'Kế toán, thuế định kỳ'],
  ['Doanh nghiệp có số liệu chưa rõ', 'Rà soát và chuẩn hóa'],
  ['Doanh nghiệp có rủi ro thuế', 'Phân tích và đề xuất hướng xử lý'],
  ['Doanh nghiệp chuẩn bị thanh, kiểm tra', 'Rà soát hồ sơ và hỗ trợ giải trình'],
  ['Doanh nghiệp có nhà đầu tư nước ngoài', 'Đồng hành về kế toán, thuế và hồ sơ liên quan'],
];

const COMMITMENTS = [
  { icon: Eye, title: 'Minh bạch', desc: 'Trong phạm vi công việc, hồ sơ và chi phí dịch vụ.' },
  { icon: Target, title: 'Chính xác', desc: 'Trong nghiệp vụ kế toán và thuế.' },
  { icon: Scale, title: 'Đúng quy định', desc: 'Trong tư vấn và xử lý hồ sơ.' },
  { icon: Zap, title: 'Chủ động', desc: 'Trong việc nhận diện và cảnh báo rủi ro.' },
  { icon: Handshake, title: 'Đồng hành', desc: 'Cùng doanh nghiệp trong quá trình hoạt động.' },
];

/* ---------------------------------------------------------------------
   App
--------------------------------------------------------------------- */

/* ---------------------------------------------------------------------
   useScrollSpy: IntersectionObserver for tracking active sections
--------------------------------------------------------------------- */
function useScrollSpy(elements, options) {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] = useState(0);

  useEffect(() => {
    const observers = [];
    elements.forEach((el, index) => {
      if (el.current) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setCurrentIntersectingElementIndex(index);
          }
        }, options);
        observer.observe(el.current);
        observers.push(observer);
      }
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [elements, options]);

  return currentIntersectingElementIndex;
}


function RevealLine() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Expand to almost full width of the container
        el.style.width = 'calc(100% - 5rem)';
        io.unobserve(el);
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className="hidden md:block absolute top-6 left-10 h-[2px] bg-gold z-0 transition-all ease-in-out shadow-[0_0_12px_rgba(197,160,89,1)]" 
      style={{ width: '0%', transitionDuration: '2400ms' }}
    />
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState('vi');
  const [zoomedImg, setZoomedImg] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="font-sans text-gray-700 bg-white antialiased selection:bg-gold-light">
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="flex items-center">
            <img src={logo} alt="HN Logo" className="h-10 w-auto object-contain scale-[1.7] origin-left ml-2" />
          </a>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500 uppercase tracking-widest">
            {[
              { href: '#about', label: t[lang].nav.about },
              { href: '#services', label: t[lang].nav.services },
              { href: '#difference', label: lang === 'vi' ? 'Khác biệt' : 'Difference' },
              { href: '#customers', label: t[lang].nav.customers },
              { href: '#process', label: lang === 'vi' ? 'Quy trình' : 'Process' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="flex items-center gap-1.5 text-gray-500 font-bold px-3 py-1.5 border border-gray-200 rounded hover:text-gold hover:border-gold uppercase text-xs transition">
              <Globe2 size={14} />
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <a href="#contact" className="bg-gold text-white px-6 py-2.5 text-sm uppercase tracking-wide font-medium hover:bg-yellow-600 transition">
              {t[lang].nav.contact}
            </a>
          </div>

          <button
            className="md:hidden text-dark"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden absolute top-full inset-x-0 bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-gold transition">
                {item.label}
              </a>
            ))}
            <a href="tel:0989772101" className="flex items-center gap-2 text-sm font-semibold text-gold pt-2 border-t border-gray-100">
              <Phone size={16} /> 0989 772 101
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="top" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-100 flex items-center min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            
            {/* LOGO BLOCK - RECREATING THE SIGN */}
            <div className="flex items-center gap-6 mb-12 mt-4 scale-90 md:scale-100 origin-left">
              {/* Left: HN Logo with precise L-border drawn OVER the image's transparent padding */}
              <div className="relative">
                {/* Top horizontal line */}
                <div className="absolute top-[13%] left-[4%] w-[68%] h-[3px] bg-[#A67C00] z-20"></div>
                {/* Left vertical line */}
                <div className="absolute top-[13%] left-[4%] w-[3px] h-[82%] bg-[#A67C00] z-20"></div>
                <img src={logo} alt="HN" className="h-48 w-auto object-contain relative z-10" />
              </div>

              {/* Right: Text block */}
              <div className="flex flex-col items-center justify-center -mt-2">
                <div className="flex flex-col items-center text-[#A67C00]" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.15)' }}>
                  <span className="text-[2rem] font-black font-sans leading-none tracking-widest uppercase" style={{ WebkitTextStroke: '1px #A67C00' }}>KẾ TOÁN</span>
                  <span className="text-[2.25rem] font-black font-sans leading-[1.1] tracking-widest uppercase mt-1" style={{ WebkitTextStroke: '1.5px #A67C00' }}>HÂN NGUYỄN</span>
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
            </div>

            <p className="text-gold font-medium tracking-widest uppercase mb-4 text-sm">
              {t[lang].hero.subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-dark font-bold leading-tight mb-6">
              {t[lang].hero.title1} <br />
              <span className="text-gold italic">{t[lang].hero.title2}</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              {t[lang].hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-dark text-white px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-gray-800 transition">
                {t[lang].hero.btnPrimary}
              </a>
              <a href="tel:0989772101" className="border border-gold text-gold px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-gold hover:text-white transition">
                0989 772 101
              </a>
            </div>
          </Reveal>

          <Reveal className="hidden md:block relative" delay={100}>
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative">
              <img
                src={heroImg}
                alt="Corporate Office"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-8 border-white/20" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl">
              <p className="font-serif text-3xl text-gold font-bold">12+</p>
              <p className="text-xs tracking-widest text-gray-500 uppercase mt-2">Năm kinh nghiệm</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">{t[lang].servicesSection.subtitle}</p>
              <h2 className="text-5xl md:text-6xl font-serif italic text-gold font-bold">{t[lang].servicesSection.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 xl:gap-6">
            {SERVICES_DATA[lang].map((s, i) => { s.icon = SERVICES[i].icon; return s; }).map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal 
                  key={s.title} 
                  delay={i * 100} 
                  className={`bg-white border border-gray-100 p-5 xl:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 rounded-sm flex flex-col group lg:col-span-2 ${i === 4 ? 'lg:col-start-3' : ''}`}
                >
                  <div className="w-14 h-14 bg-gold-light/10 flex items-center justify-center text-gold mb-5 rounded-sm group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.05rem] xl:text-lg font-serif text-dark font-bold mb-3 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-[13px] mb-5 leading-relaxed flex-grow">{s.note}</p>

                  <div className="w-6 h-px bg-gold/30 mb-5"></div>

                  <ul className="text-[12px] xl:text-[13px] text-gray-500 space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-medium">
                        <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" /> 
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section id="difference" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold mb-8">{t[lang].diff.subtitle}</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t[lang].diff.intro1}</p>
            <p className="text-dark font-medium text-lg leading-relaxed italic">{t[lang].diff.intro2}</p>
          </Reveal>

          <Reveal className="text-center mb-20 max-w-[1000px] mx-auto">
            <div className="bg-off-white border border-gray-100 p-10 md:p-16 shadow-sm w-full relative">
              <div className="absolute top-6 left-6 text-gold/10 font-serif text-8xl leading-none select-none">"</div>
              <p className="text-gold text-sm tracking-widest uppercase font-medium mb-6 relative z-10">{t[lang].diff.intro3}</p>
              <p className="text-dark font-serif text-2xl md:text-4xl leading-normal md:leading-relaxed mb-10 italic relative z-10">{t[lang].diff.intro4}</p>
              
              <div className="w-24 h-px bg-gold/40 mx-auto mb-10 relative z-10"></div>
              
              <p className="text-gold text-sm tracking-widest uppercase font-medium mb-4 relative z-10">{t[lang].diff.intro5}</p>
              <p className="text-3xl md:text-5xl font-serif italic text-gold font-bold relative z-10">{t[lang].diff.intro6}</p>
              <div className="absolute bottom-[-20px] right-8 text-gold/10 font-serif text-8xl leading-none select-none rotate-180">"</div>
            </div>
          </Reveal>

          <Reveal className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif italic text-gold font-bold">{t[lang].diff.title}</h3>
          </Reveal>
          
          <div className="grid md:grid-cols-5 gap-6">
            {DIFFERENTIATORS_DATA[lang].map((d, i) => { d.icon = DIFFERENTIATORS[i].icon; return d; }).map((d, i) => (
              <Reveal key={d.title} delay={i * 60} className="p-8 border border-gray-100 bg-off-white card-hover">
                <span className="block text-gold font-serif text-2xl mb-4">{String(i + 1).padStart(2, '0')}.</span>
                <h3 className="text-dark font-semibold mb-3 uppercase tracking-wide text-sm">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="founder" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="relative">
            <img src={directorImg} alt="Giám đốc Ngọc Hân" className="w-full aspect-[4/5] object-cover rounded-sm" />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl hidden sm:block z-10">
              <p className="font-serif text-3xl text-gold font-bold">12</p>
              <p className="text-xs tracking-widest text-gray-500 uppercase mt-2">{t[lang].founder.expText}</p>
            </div>
            
                      </Reveal>

          <Reveal delay={100}>
            <p className="text-gold font-medium tracking-widest uppercase mb-4 text-sm">{t[lang].founder.subtitle}</p>
            <h2 className="text-5xl md:text-6xl font-serif italic text-gold font-bold mb-2">Nguyễn Thị Ngọc Hân</h2>
            <p className="text-gray-500 mb-8">{t[lang].founder.role}</p>

            <h3 className="font-bold text-dark mb-4 tracking-wide">{t[lang].founder.foundationTitle}</h3>
            
            {/* 4 short items in 2 columns with checkmarks */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-5">
              {t[lang].founder.items.slice(0, 4).map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Remaining long items in 1 column with bullet points */}
            <div className="flex flex-col gap-y-3 mb-6">
              {t[lang].founder.items.slice(4).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0"></div>
                  <span className="text-gray-600 text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-medium text-lg mb-6 italic">
              {t[lang].founder.extraRole}
            </p>

            <blockquote className="border-l-2 border-gold pl-6 text-lg italic text-gray-500 leading-relaxed font-serif">
              {t[lang].founder.quote}
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="max-w-7xl mx-auto px-6 mt-24" delay={200}>
          <div className="border-t border-gray-100 pt-16">
            <h3 className="text-4xl md:text-5xl font-serif italic text-gold font-bold mb-12 text-center">{t[lang].founder.degrees}</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                className="bg-white p-6 shadow-2xl rounded-sm border border-gold/20 relative group hover:-translate-y-2 transition-transform duration-500 cursor-zoom-in"
                onClick={() => setZoomedImg(bangCuNhan)}
              >
                <div className="absolute inset-0 border border-gold/50 m-2 pointer-events-none rounded-sm"></div>
                <div className="relative border border-gold/20 bg-gray-50 p-4 shadow-inner">
                  <img src={bangCuNhan} alt={t[lang].founder.deg1} className="w-full h-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-center mt-6 text-sm font-bold text-dark uppercase tracking-widest font-serif relative z-10">{t[lang].founder.deg1}</p>
                <div className="w-12 h-px bg-gold/50 mx-auto mt-3"></div>
              </div>
              
              <div 
                className="bg-white p-6 shadow-2xl rounded-sm border border-gold/20 relative group hover:-translate-y-2 transition-transform duration-500 cursor-zoom-in"
                onClick={() => setZoomedImg(bangThacSi)}
              >
                <div className="absolute inset-0 border border-gold/50 m-2 pointer-events-none rounded-sm"></div>
                <div className="relative border border-gold/20 bg-gray-50 p-4 shadow-inner">
                  <img src={bangThacSi} alt={t[lang].founder.deg2} className="w-full h-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-center mt-6 text-sm font-bold text-dark uppercase tracking-widest font-serif relative z-10">{t[lang].founder.deg2}</p>
                <div className="w-12 h-px bg-gold/50 mx-auto mt-3"></div>
              </div>

              <div 
                className="bg-white p-6 shadow-2xl rounded-sm border border-gold/20 relative group hover:-translate-y-2 transition-transform duration-500 cursor-zoom-in"
                onClick={() => setZoomedImg(bangKhen1)}
              >
                <div className="absolute inset-0 border border-gold/50 m-2 pointer-events-none rounded-sm"></div>
                <div className="relative border border-gold/20 bg-gray-50 p-4 shadow-inner">
                  <img src={bangKhen1} alt={t[lang].founder.deg3} className="w-full h-auto object-contain drop-shadow-md" />
                </div>
                <p className="text-center mt-6 text-sm font-bold text-dark uppercase tracking-widest font-serif relative z-10">{t[lang].founder.deg3}</p>
                <div className="w-12 h-px bg-gold/50 mx-auto mt-3"></div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold text-center mb-16">{t[lang].process.title}</h2>

          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-10 gap-x-2">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-gray-200 z-0" />
            <RevealLine />
            {PROCESS_DATA[lang].map((p, i) => (
              <Reveal key={p.title} delay={i * 350} className="relative z-10 flex flex-col items-center text-center px-2 group">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 border-2 font-serif text-xl transition-all duration-500 ${
                    p.active ? 'bg-gold border-gold text-white shadow-[0_0_15px_rgba(197,160,89,0.6)]' : 'bg-white border-gray-200 text-gray-400 group-[.is-visible]:border-gold group-[.is-visible]:text-gold group-[.is-visible]:shadow-[0_0_15px_rgba(197,160,89,0.4)] bg-white'
                  }`}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-2 transition-colors duration-500">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed transition-opacity duration-500">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold font-bold mb-4">{t[lang].commit.title}</h2>
            <p className="text-gray-500">{lang === 'vi' ? 'Hân Nguyễn hướng đến việc xây dựng mối quan hệ lâu dài với doanh nghiệp trên cơ sở:' : 'Han Nguyen aims to build long-term relationships with businesses based on:'}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMMITMENTS_DATA[lang].map((c, i) => { c.icon = COMMITMENTS[i].icon; return c; }).map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 60} className="text-center">
                  <div className="w-12 h-12 bg-off-white flex items-center justify-center rounded-full mx-auto mb-4 border border-gray-100">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-bold text-sm text-dark uppercase tracking-wide">{c.title}</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{c.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT SECTION */}
      <footer id="contact" className="bg-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
          <Reveal>
            <div className="flex items-center mb-6">
              <img src={logo} alt="HN Logo" className="h-20 md:h-24 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
              {lang === 'vi' ? 'Doanh nghiệp tập trung vào kinh doanh. Hân Nguyễn đồng hành phía sau để hệ thống kế toán – thuế được vận hành đúng và kiểm soát được rủi ro.' : 'Businesses focus on growth. Han Nguyen supports behind the scenes to ensure the accounting and tax system operates correctly and risks are controlled.'}
            </p>
            <div className="text-xl font-serif text-gold italic">
              {lang === 'vi' ? '"Tuân thủ đúng – Yên tâm phát triển"' : '"Proper compliance – Assured growth"'}
            </div>
          </Reveal>
          
          <Reveal delay={80}>
            <h4 className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-6">{t[lang].contact.title}</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3"><MapPin size={18} /></span> 
                {lang === 'vi' ? 'Số 22 đường số 15, KDC An Bình, phường An Bình, Cần Thơ' : 'No. 22, Street 15, An Binh Residential Area, An Binh Ward, Can Tho City'}
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3"><Phone size={18} /></span> 
                <a href="tel:0989772101" className="hover:text-gold transition">0989 772 101</a>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3"><User size={18} /></span> 
                {lang === 'vi' ? 'Nguyễn Thị Ngọc Hân (Giám đốc / Kế toán trưởng)' : 'Nguyen Thi Ngoc Han (Director / Chief Accountant)'}
              </li>
            </ul>
            
            {submitted ? (
              <p className="mt-8 text-sm text-gold font-semibold">{t[lang].contact.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <label htmlFor="quick-phone" className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                  {lang === 'vi' ? 'Để lại số điện thoại, chúng tôi sẽ gọi lại' : 'Leave your phone number, we will call back'}
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="quick-phone"
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="cta-shine inline-flex items-center justify-center gap-2 bg-white text-dark px-8 py-3 text-sm uppercase tracking-wide font-medium hover:bg-gold hover:text-white transition"
                  >
                    {lang === 'vi' ? 'Nhận tư vấn ngay' : 'Get Consultation'} <ArrowUpRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
          &copy; 2026 Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn. All rights reserved.
        </div>
      </footer>

      {/* ZOOM MODAL */}
      {zoomedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setZoomedImg(null)}
        >
          <img 
            src={zoomedImg} 
            alt="Zoomed Certificate" 
            className="max-w-[95vw] max-h-[95vh] object-contain drop-shadow-2xl rounded-sm"
          />
        </div>
      )}
    </div>
  );
}

export default App;
