import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Phone, MapPin, User, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Calculator, Settings2, ShieldCheck, Building2, Globe2,
  Scale, Compass, SearchCheck, Handshake,
  RefreshCcw, ShoppingBag, Factory, HardHat, Store, UtensilsCrossed,
  Eye, Target, Zap, TriangleAlert,
} from 'lucide-react';
import logo from './assets/HN_logo.png';

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
  { href: '#about', label: 'Giới thiệu' },
  { href: '#services', label: 'Dịch vụ' },
  { href: '#difference', label: 'Khác biệt' },
  { href: '#customers', label: 'Khách hàng' },
  { href: '#process', label: 'Quy trình' },
];

const SERVICES = [
  {
    icon: Calculator,
    title: 'Kế toán, thuế trọn gói',
    note: 'Kế toán thuế định kỳ, tờ khai thuế, báo cáo tài chính và quyết toán thuế trọn gói.',
    items: [
      'Kế toán thuế định kỳ',
      'Lập và nộp tờ khai thuế',
      'Báo cáo tài chính, quyết toán thuế',
      'Thuế GTGT, TNDN, TNCN',
      'Hóa đơn điện tử',
      'Theo dõi công nợ',
      'Rà soát chứng từ, hóa đơn',
      'Hỗ trợ tổ chức hệ thống sổ sách kế toán',
    ],
  },
  {
    icon: Settings2,
    title: 'Thiết lập hệ thống kế toán',
    note: 'Dành cho doanh nghiệp mới thành lập hoặc tổ chức lại. Xây dựng quy trình, kiểm soát dòng tiền và hướng dẫn nhân sự.',
    items: [
      'Xây dựng quy trình kế toán',
      'Thiết lập chứng từ, tài khoản',
      'Kiểm soát công nợ, dòng tiền',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Tư vấn & Rà soát Rủi ro',
    note: 'Rà soát hồ sơ thuế, chi phí, hóa đơn trước khi thanh tra. Tư vấn ưu đãi và hoàn thuế cho doanh nghiệp.',
    items: [
      'Rà soát hồ sơ, chi phí, thuế',
      'Tư vấn ưu đãi, hoàn thuế',
      'Hỗ trợ giải trình cơ quan thuế',
    ],
  },
  {
    icon: Building2,
    title: 'Thành lập & thay đổi',
    note: 'Thành lập doanh nghiệp, thay đổi đăng ký kinh doanh, tạm ngừng, giải thể.',
    items: [
      'Thành lập doanh nghiệp',
      'Thay đổi đăng ký kinh doanh, thành viên, địa chỉ',
      'Tạm ngừng, giải thể doanh nghiệp',
    ],
  },
  {
    icon: Globe2,
    title: 'Doanh nghiệp FDI',
    note: 'Kế toán, thuế, hồ sơ vốn nước ngoài, giấy phép lao động và visa.',
    items: [
      'Tư vấn kế toán, thuế cho doanh nghiệp có vốn nước ngoài',
      'Hồ sơ vốn nước ngoài',
      'Giấy phép lao động, visa, thẻ tạm trú',
    ],
  },
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
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:inline-block bg-gold text-white px-6 py-2.5 text-sm uppercase tracking-wide font-medium hover:bg-yellow-600 transition">
            Liên hệ ngay
          </a>

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
            <p className="text-gold font-medium tracking-widest uppercase mb-4 text-sm">
              Công ty TNHH Kế toán & Tư vấn Thuế
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-dark font-bold leading-tight mb-6">
              Kế toán. Thuế. <br />
              <span className="text-gold italic">Tư vấn doanh nghiệp.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Tuân thủ đúng – Yên tâm phát triển. Chúng tôi không chỉ nhận số liệu để lập báo cáo, chúng tôi thiết lập một hệ thống kế toán hoàn chỉnh và thông suốt cho doanh nghiệp.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-dark text-white px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-gray-800 transition">
                Khám phá dịch vụ
              </a>
              <a href="tel:0989772101" className="border border-gold text-gold px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-gold hover:text-white transition">
                0989 772 101
              </a>
            </div>
          </Reveal>

          <Reveal className="hidden md:block relative" delay={100}>
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Corporate Office"
                className="object-cover w-full h-full grayscale opacity-80 mix-blend-multiply"
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

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-serif text-dark font-bold mb-6">Xây dựng hệ thống – Không chỉ làm báo cáo.</h2>
            <p className="text-gray-500 leading-relaxed">
              Một doanh nghiệp có thể thuê đơn vị kế toán để lập báo cáo. Nhưng một hệ thống kế toán tốt phải giúp doanh nghiệp trả lời được: Doanh thu ghi nhận đúng chưa? Dòng tiền có khớp không? Rủi ro thuế nằm ở đâu? Hân Nguyễn đồng hành để trả lời những câu hỏi đó.
            </p>
          </Reveal>

          <Reveal className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto mb-20" delay={80}>
            {QUESTIONS.map((q) => (
              <div key={q} className="flex items-start gap-3">
                <ArrowRight size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-gray-500 text-sm">{q}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section id="difference" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">Vì sao chọn Hân Nguyễn</p>
            <h2 className="text-3xl font-serif text-dark font-bold">Điểm khác biệt</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-5 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
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
            <PhotoPending label="Chân dung Giám đốc Ngọc Hân" ratio="aspect-[4/5]" />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl hidden sm:block">
              <p className="font-serif text-3xl text-gold font-bold">12</p>
              <p className="text-xs tracking-widest text-gray-500 uppercase mt-2">Năm kinh nghiệm thuế</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-gold font-medium tracking-widest uppercase mb-4 text-sm">Người sáng lập</p>
            <h2 className="text-4xl font-serif text-dark font-bold mb-2">Nguyễn Thị Ngọc Hân</h2>
            <p className="text-gray-500 mb-8">Giám đốc, Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn</p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8">
              {[
                'Cử nhân Kế toán, Kiểm toán',
                'Chứng chỉ Kế toán trưởng',
                'Chứng chỉ Đại lý thuế',
                'Từng đảm nhiệm Trưởng đoàn kiểm tra',
                'Rà soát hồ sơ thuế cho nhiều doanh nghiệp',
                'Kinh nghiệm với doanh nghiệp có yếu tố nước ngoài',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-gold pl-6 italic text-gray-500 leading-relaxed font-serif">
              "Tư vấn kế toán – thuế không chỉ là xử lý một bộ hồ sơ. Điều quan trọng là phải hiểu hoạt động thực tế của doanh nghiệp, xác định đúng bản chất giao dịch và xây dựng phương án phù hợp với quy định pháp luật."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">Chuyên môn của chúng tôi</p>
              <h2 className="text-4xl font-serif text-dark font-bold">Dịch vụ cốt lõi</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const isOpen = expandedService === i;
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 60}
                  className={`bg-white p-10 border border-gray-100 transition duration-300 card-hover ${i >= 3 ? 'md:col-span-1' : ''}`}
                >
                  <div className="w-12 h-12 bg-gold-light/20 flex items-center justify-center text-gold mb-6 rounded-sm">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif text-dark mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.note}</p>

                  {isOpen && (
                    <ul className="text-sm text-gray-500 space-y-2 mb-6">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => setExpandedService(isOpen ? -1 : i)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-yellow-600 transition-colors"
                  >
                    {isOpen ? 'Thu gọn' : 'Xem chi tiết'}
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark font-bold text-center mb-16">Quy trình làm việc minh bạch</h2>

          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-10 gap-x-2">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-gray-200 z-0" />
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 50} className="relative z-10 flex flex-col items-center text-center px-2">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 border-2 font-serif text-xl ${
                    p.active ? 'bg-gold border-gold text-white' : 'bg-white border-gold text-gold'
                  }`}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-2">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 max-w-4xl mx-auto bg-off-white border border-gray-100 p-8 md:p-10" delay={200}>
            <p className="text-xl font-serif text-dark font-bold mb-6">Hân Nguyễn đồng hành từ đâu?</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {STARTING_POINTS.map(([left, right]) => (
                <div key={left} className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-dark">{left}</span>
                  <span className="flex items-center gap-2 text-sm text-gold">
                    <ArrowRight size={13} className="shrink-0" /> {right}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CUSTOMERS SECTION */}
      <section id="customers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase font-medium mb-2">Phù hợp với</p>
            <h2 className="text-3xl font-serif text-dark font-bold">Đối tượng khách hàng</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {CUSTOMERS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 60}>
                  <Icon size={24} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-sm text-dark leading-snug">{c.title}</h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{c.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENTS SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-dark font-bold mb-4">Cam kết của chúng tôi</h2>
            <p className="text-gray-500">Hân Nguyễn hướng đến việc xây dựng mối quan hệ lâu dài với doanh nghiệp trên cơ sở:</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMMITMENTS.map((c, i) => {
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
              Doanh nghiệp tập trung vào kinh doanh. Hân Nguyễn đồng hành phía sau để hệ thống kế toán – thuế được vận hành đúng và kiểm soát được rủi ro.
            </p>
            <div className="text-xl font-serif text-gold italic">
              "Tuân thủ đúng – Yên tâm phát triển"
            </div>
          </Reveal>
          
          <Reveal delay={80}>
            <h4 className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3"><MapPin size={18} /></span> 
                Số 22 đường số 15, KDC An Bình, phường An Bình, Cần Thơ
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3"><Phone size={18} /></span> 
                <a href="tel:0989772101" className="hover:text-gold transition">0989 772 101</a>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3"><User size={18} /></span> 
                Nguyễn Thị Ngọc Hân (Giám đốc / Kế toán trưởng)
              </li>
            </ul>
            
            {submitted ? (
              <p className="mt-8 text-sm text-gold font-semibold">Đã nhận được yêu cầu của bạn. Hân Nguyễn sẽ liên hệ lại sớm nhất.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <label htmlFor="quick-phone" className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                  Để lại số điện thoại, chúng tôi sẽ gọi lại
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
                    Nhận tư vấn ngay <ArrowUpRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
          &copy; 2026 Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
