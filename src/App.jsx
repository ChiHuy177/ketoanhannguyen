import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, CheckCircle2, Award,
  ChevronLeft, ChevronRight,
  Building2, Calculator, HeartHandshake, Laptop, Globe2, FileSearch,
  Scale, Compass, SearchCheck, Settings2, Handshake, Eye, Target, Zap,
} from 'lucide-react';
import logo from './assets/HN_logo.png';
import logoMark from './assets/logo-han-nguyen-mark.svg';
import logoFull from './assets/logo-han-nguyen.svg';
import heroImg from './assets/hero-img.jpg';
import directorImg from './assets/director.png';
import bangCuNhan from './assets/bang_cu_nhan.png';
import bangThacSi from './assets/bang_thac_si.png';
import bangKhen1 from './assets/bangkhen_1.png';
import bangKhen2 from './assets/bangkhen_2.png';
import { content as t, SERVICES_DATA, PROCESS_DATA, DIFFERENTIATORS_DATA, COMMITMENTS_DATA } from './locales.js';

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

function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children }) {
  const ref = useRevealRef();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}

/* Icon order matches the corresponding *_DATA arrays in locales.js. */
const SERVICE_ICONS = [Building2, Calculator, HeartHandshake, Laptop, Globe2, FileSearch];
const DIFF_ICONS = [Scale, Compass, SearchCheck, Settings2, Handshake];
const COMMIT_ICONS = [Eye, Target, Scale, Zap, Handshake];

/* Glowing rail line under the process steps, expands into view once. */
function RevealLine() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
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
      className="hidden md:block absolute top-[22px] left-10 h-[2px] z-0 transition-all ease-in-out"
      style={{ width: '0%', transitionDuration: '2400ms', background: '#C9A227', boxShadow: '0 0 12px rgba(201,162,39,0.6)' }}
    />
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('vi');
  const [zoomedImg, setZoomedImg] = useState(null);
  const [certIdx, setCertIdx] = useState(0);

  const certItems = [
    { img: bangCuNhan,  title: lang === 'vi' ? 'Cử nhân' : 'Bachelor' },
    { img: bangThacSi,  title: lang === 'vi' ? 'Thạc sĩ' : 'Master' },
    { img: bangKhen2,   title: lang === 'vi' ? 'Chứng chỉ Đại lý thuế' : 'Tax Agent Cert.' },
    { img: bangKhen1,   title: lang === 'vi' ? 'Giấy khen Cục thuế' : 'Tax Dept. Award' },
  ];

  const nextCert = () => setCertIdx((prev) => (prev + 1) % certItems.length);
  const prevCert = () => setCertIdx((prev) => (prev - 1 + certItems.length) % certItems.length);

  const navItems = [
    { href: '#services', label: t[lang].nav.services },
    { href: '#difference', label: lang === 'vi' ? 'Khác biệt' : 'Difference' },
    { href: '#founder', label: lang === 'vi' ? 'Người sáng lập' : 'Founder' },
    { href: '#process', label: lang === 'vi' ? 'Quy trình' : 'Process' },
  ];

  return (
    <div className="font-sans antialiased" style={{ color: '#1B1B1B', background: '#FAF6EC' }}>
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(253,241,223,0.92)', borderColor: 'rgba(34,77,167,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center">
            <img src={logoMark} alt="Kế Toán Hân Nguyễn" className="w-[88px] h-[88px] object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[14px] font-semibold uppercase tracking-widest transition hover:opacity-70" style={{ color: '#224DA7' }}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="flex items-center gap-1.5 font-bold px-3 py-1.5 border rounded uppercase text-sm transition" style={{ color: '#224DA7', borderColor: 'rgba(34,77,167,0.3)' }}>
              <Globe2 size={14} />
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <a href="#contact" className="text-[14px] font-bold uppercase tracking-wide rounded-sm" style={{ background: '#E8C766', color: '#224DA7', padding: '10px 24px' }}>
              {t[lang].nav.contact}
            </a>
          </div>

          <button className="md:hidden" style={{ color: '#224DA7' }} onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t px-6 py-6 flex flex-col gap-4" style={{ background: '#FDF1DF', borderColor: 'rgba(34,77,167,0.15)' }}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-[15px] font-semibold uppercase tracking-widest" style={{ color: '#224DA7' }}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="self-start text-[14px] font-bold uppercase tracking-wide rounded-sm" style={{ background: '#E8C766', color: '#224DA7', padding: '10px 24px' }}>
              {t[lang].nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #1A3C8A 0%, #1A3C8A 38%, #4A69AB 52%, #BCBCBA 62%, #ECE4BD 76%, #F4E2C7 88%, #FDF1DF 100%)',
          minHeight: '620px',
        }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(60% 70% at 0% 100%, rgba(20,34,72,0.7), transparent 70%)' }} />
        <div
          className="lattice absolute inset-y-0 right-0 w-[60%] pointer-events-none"
          style={{
            opacity: 0.55,
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 45%, #000 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, #000 45%, #000 100%)',
          }}
        />

        <div className="relative z-[1] flex flex-col md:flex-row max-w-7xl mx-auto w-full" style={{ minHeight: '620px' }}>
          <div className="flex-1 px-6 md:px-10 py-14 flex items-center">
            <Reveal className="flex flex-col gap-6">
              <img src={logoFull} alt="Kế Toán Hân Nguyễn - Tuân thủ đúng, Yên tâm phát triển" className="w-[420px] max-w-full h-auto object-contain" />

              <p className="font-display font-bold text-[21px] tracking-[1.5px] uppercase" style={{ color: '#FDF1DF' }}>
                {t[lang].hero.subtitle}
              </p>

              <h1 className="font-display font-extrabold text-[41px] md:text-[45px] leading-[1.15] uppercase" style={{ color: '#E8C766', textWrap: 'balance' }}>
                {t[lang].hero.title1} {t[lang].hero.title2}
              </h1>

              <p className="text-[17px] leading-[1.7] max-w-[480px]" style={{ color: '#F4E2C7' }}>
                {t[lang].hero.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="self-start font-bold text-[16px]"
                  style={{ background: '#E8C766', color: '#224DA7', padding: '13px 26px', borderRadius: '4px' }}
                >
                  {t[lang].hero.btnPrimary}
                </a>
                <a href="tel:0989772101" className="inline-flex items-center gap-2 text-[16px] font-semibold" style={{ color: '#FDF1DF' }}>
                  <Phone size={15} className="fill-current" /> 0989 772 101
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="flex-1 relative flex items-center justify-center p-8 md:p-12">
            <div
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden"
              style={{ borderRadius: '10px', border: '3px solid #C9A227', boxShadow: '0 8px 22px rgba(26,43,85,0.18)' }}
            >
              <img src={heroImg} alt="Nguyễn Thị Ngọc Hân tại văn phòng Kế toán Hân Nguyễn" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 px-5 py-3.5 rounded-sm shadow-xl" style={{ background: '#FDF1DF' }}>
              <p className="font-display font-extrabold text-4xl leading-none" style={{ color: '#C9A227' }}>12+</p>
              <p className="text-[12.5px] font-semibold tracking-widest uppercase mt-1 max-w-[12ch]" style={{ color: '#224DA7' }}>
                {lang === 'vi' ? 'Năm kinh nghiệm' : 'Years of experience'}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative py-16 scroll-mt-32"
        style={{ background: 'radial-gradient(30% 40% at 92% 8%, rgba(201,162,39,0.08), transparent 70%), radial-gradient(26% 30% at 10% 96%, rgba(232,199,102,0.10), transparent 70%), #FAF6EC' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="mb-10">
            <h2 className="font-display font-extrabold uppercase text-[33px] tracking-[1px]" style={{ color: '#224DA7' }}>
              {t[lang].servicesSection.title}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {SERVICES_DATA[lang].map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <Reveal
                  key={s.title}
                  delay={i * 80}
                  className="relative bg-white overflow-hidden p-6 pt-9 flex flex-col items-center gap-3.5 text-center"
                  style={{ borderRadius: '14px', boxShadow: '0 6px 18px rgba(34,77,167,0.14)' }}
                >
                  <span
                    className="absolute top-0 left-0 w-[46px] h-[46px] flex items-start justify-start pt-[7px] pl-[9px]"
                    style={{ background: '#224DA7', borderBottomRightRadius: '22px' }}
                  >
                    <span className="font-display font-extrabold text-[19px]" style={{ color: '#E8C766' }}>
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                  </span>

                  <Icon size={44} strokeWidth={1.3} color="#C9A227" />

                  <h3 className="font-extrabold text-[17px] leading-tight uppercase" style={{ color: '#224DA7' }}>{s.title}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#5F594C' }}>{s.note}</p>
                  <ul className="flex flex-col gap-2 text-left w-full">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14.5px] font-medium" style={{ color: '#3A3A3A' }}>
                        <CheckCircle2 size={13} color="#C9A227" className="shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className="absolute right-0 bottom-0 w-0 h-0"
                    style={{ borderStyle: 'solid', borderWidth: '0 0 26px 26px', borderColor: 'transparent transparent #224DA7 transparent' }}
                  />
                </Reveal>
              );
            })}
          </div>

          <Reveal className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <span className="font-extrabold text-[18px]" style={{ color: '#224DA7' }}>
              {t[lang].diff.intro6}
            </span>
            <a href="tel:0989772101" className="inline-flex items-center gap-2 font-extrabold text-[18px]" style={{ color: '#224DA7' }}>
              <Phone size={18} className="fill-current" /> 0989 772 101
            </a>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENCE SECTION — PART 1: "Vì sao nên lựa chọn..." (dark navy, like Hero/Commitments) */}
      <section
        id="difference"
        className="relative overflow-hidden py-20 scroll-mt-32"
        style={{
          background: 'radial-gradient(55% 80% at 8% 0%, rgba(74,105,171,0.4), transparent 60%),' +
            'radial-gradient(60% 70% at 100% 100%, rgba(20,34,72,0.75), transparent 70%),' +
            'linear-gradient(135deg, #1A3C8A 0%, #16305F 100%)',
        }}
      >
        <div
          className="lattice absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.35,
            WebkitMaskImage: 'radial-gradient(75% 100% at 50% 0%, #000 0%, transparent 90%)',
            maskImage: 'radial-gradient(75% 100% at 50% 0%, #000 0%, transparent 90%)',
          }}
        />
        <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mx-auto text-center mb-6">
            <h2 className="font-display font-extrabold uppercase text-[28px] md:text-[34px] tracking-[0.5px]" style={{ color: '#E8C766' }}>{t[lang].diff.subtitle}</h2>
          </Reveal>

          <div className="max-w-2xl mx-auto flex flex-col gap-4 text-center mb-16">
            <Reveal>
              <p className="text-lg leading-relaxed" style={{ color: '#F4E2C7' }}>{t[lang].diff.intro1}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="font-extrabold text-[18px] leading-snug" style={{ color: '#E8C766', textWrap: 'balance' }}>{t[lang].diff.intro2}</p>
            </Reveal>
          </div>

          <Reveal className="relative max-w-3xl mx-auto overflow-hidden" style={{ borderRadius: '18px', boxShadow: '0 20px 40px -12px rgba(0,0,0,0.4)' }}>
            <div className="relative px-8 py-12 md:px-16 md:py-14 text-center" style={{ background: '#fff' }}>
              <span
                aria-hidden="true"
                className="absolute top-0 left-2 md:left-6 font-display select-none pointer-events-none"
                style={{ fontSize: '120px', lineHeight: 1, color: 'rgba(201,162,39,0.14)' }}
              >
                &ldquo;
              </span>
              <p className="relative text-sm font-bold tracking-[0.16em] uppercase mb-5" style={{ color: '#C9A227' }}>{t[lang].diff.intro3}</p>
              <p className="relative font-display font-bold text-2xl md:text-[32px] leading-snug" style={{ color: '#224DA7', textWrap: 'balance' }}>{t[lang].diff.intro4}</p>
            </div>
            <div className="py-6 text-center" style={{ background: 'linear-gradient(135deg,#E8C766,#B8860B)' }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(26,43,85,0.65)' }}>{t[lang].diff.intro5}</p>
              <p className="font-display font-extrabold uppercase text-2xl md:text-[26px] tracking-[0.5px]" style={{ color: '#224DA7' }}>{t[lang].diff.intro6}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENCE SECTION — PART 2: "Điểm khác biệt" (cream + bloom, like Services — kept distinct from the warm+lattice Founder section right below) */}
      <section
        className="py-20"
        style={{ background: 'radial-gradient(30% 40% at 92% 8%, rgba(201,162,39,0.08), transparent 70%), radial-gradient(26% 30% at 10% 96%, rgba(232,199,102,0.10), transparent 70%), #FAF6EC' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <h3 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-center mb-10" style={{ color: '#224DA7' }}>{t[lang].diff.title}</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {DIFFERENTIATORS_DATA[lang].map((d, i) => {
              const Icon = DIFF_ICONS[i];
              return (
                <Reveal key={d.title} delay={i * 60} className="p-6" style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 6px 18px rgba(34,77,167,0.14)' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ border: '1.5px solid #C9A227' }}>
                    <Icon size={19} strokeWidth={1.6} color="#C9A227" />
                  </div>
                  <h4 className="text-[15px] font-bold uppercase tracking-wide mb-2" style={{ color: '#224DA7' }}>{d.title}</h4>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#5F594C' }}>{d.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section
        id="founder"
        className="relative overflow-hidden py-20 scroll-mt-32"
        style={{
          background: 'radial-gradient(38% 55% at 8% 12%, rgba(232,199,102,0.22), transparent 70%),' +
            'radial-gradient(34% 50% at 92% 88%, rgba(232,199,102,0.26), transparent 70%),' +
            'linear-gradient(120deg, #F8E9D5 0%, #FDF4EA 45%, #F6E6CB 100%)',
        }}
      >
        <div
          className="lattice absolute inset-y-0 right-0 w-[46%] pointer-events-none"
          style={{
            opacity: 0.5,
            WebkitMaskImage: 'linear-gradient(270deg, #000 0%, #000 35%, transparent 100%)',
            maskImage: 'linear-gradient(270deg, #000 0%, #000 35%, transparent 100%)',
          }}
        />
        <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-stretch">
            <Reveal className="relative flex-none w-full md:w-[40%] lg:w-[36%] mb-16 md:mb-0">
              <div
                className="w-full h-full aspect-[4/5] md:aspect-auto overflow-hidden"
                style={{ borderRadius: '10px', border: '3px solid #C9A227', boxShadow: '0 8px 22px rgba(26,43,85,0.18)' }}
              >
                <img src={directorImg} alt="Nguyễn Thị Ngọc Hân" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute left-4 bottom-0 translate-y-1/3 px-7 py-5"
                style={{ background: '#FDF1DF', borderRadius: '4px', boxShadow: '0 8px 22px rgba(26,43,85,0.18)' }}
              >
                <p className="font-display font-extrabold text-[42px] leading-none" style={{ color: '#C9A227' }}>{t[lang].founder.exp}</p>
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] mt-1.5 whitespace-nowrap" style={{ color: '#224DA7' }}>{t[lang].founder.expText}</p>
              </div>
            </Reveal>

            <Reveal delay={100} className="flex-1 min-w-0 flex flex-col gap-6">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[2.5px] mb-2" style={{ color: '#C9A227' }}>{t[lang].founder.subtitle}</p>
                <h2 className="font-display font-extrabold uppercase text-3xl md:text-[31px] leading-tight" style={{ color: '#224DA7' }}>Nguyễn Thị Ngọc Hân</h2>
                <p className="text-[16px] mt-1.5" style={{ color: '#3A3A3A' }}>{t[lang].founder.role}</p>
              </div>

              <div>
                <p className="font-display font-extrabold text-[17px] tracking-[0.5px] uppercase mb-3.5" style={{ color: '#224DA7' }}>
                  {t[lang].founder.foundationTitle || (lang === 'vi' ? 'Nền tảng chuyên môn' : 'Professional foundation')}
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {t[lang].founder.items.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={17} color="#C9A227" className="shrink-0" />
                      <span className="text-[15px]" style={{ color: '#3A3A3A' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {t[lang].founder.items.slice(4).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: '#3A3A3A' }}>
                    <span className="shrink-0 w-[6px] h-[6px] rounded-full mt-[8px]" style={{ background: '#C9A227' }} />
                    {item}
                  </li>
                ))}
              </ul>

              {t[lang].founder.extraRole && (
                <p className="font-extrabold text-[18px] leading-snug" style={{ color: '#224DA7' }}>
                  {t[lang].founder.extraRole}
                </p>
              )}

              <blockquote className="italic text-[17.5px] leading-relaxed" style={{ color: '#5F594C', borderLeft: '2px solid #C9A227', paddingLeft: '18px' }}>
                {t[lang].founder.quote}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section
        id="process"
        className="relative overflow-hidden py-20 scroll-mt-32"
        style={{
          background: 'radial-gradient(38% 55% at 8% 12%, rgba(232,199,102,0.22), transparent 70%),' +
            'radial-gradient(34% 50% at 92% 88%, rgba(232,199,102,0.26), transparent 70%),' +
            'linear-gradient(120deg, #F8E9D5 0%, #FDF4EA 45%, #F6E6CB 100%)',
        }}
      >
        <div
          className="lattice absolute inset-y-0 right-0 w-[46%] pointer-events-none"
          style={{
            opacity: 0.5,
            WebkitMaskImage: 'linear-gradient(270deg, #000 0%, #000 35%, transparent 100%)',
            maskImage: 'linear-gradient(270deg, #000 0%, #000 35%, transparent 100%)',
          }}
        />
        <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-center mb-14" style={{ color: '#224DA7' }}>{t[lang].process.title}</h2>
          </Reveal>

          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-9 gap-x-2">
            <div className="hidden md:block absolute top-[22px] left-10 right-10 h-px z-0" style={{ background: 'rgba(34,77,167,0.15)' }} />
            <RevealLine />
            {PROCESS_DATA[lang].map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="relative z-10 flex flex-col items-center text-center px-2">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-xl mb-3.5"
                  style={p.active
                    ? { background: 'linear-gradient(135deg,#E8C766,#B8860B)', border: '2px solid #C9A227', color: '#224DA7', boxShadow: '0 0 0 6px rgba(201,162,39,0.18)' }
                    : { background: '#fff', border: '2px solid rgba(34,77,167,0.2)', color: '#5F594C', boxShadow: '0 4px 10px rgba(34,77,167,0.10)' }}
                >
                  {i + 1}
                </div>
                <h4 className="text-[14.5px] font-bold uppercase tracking-wide mb-1.5" style={{ color: '#224DA7' }}>{p.title}</h4>
                <p className="text-[14.5px] leading-relaxed" style={{ color: '#5F594C' }}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS SECTION */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          background: 'radial-gradient(55% 80% at 92% 0%, rgba(74,105,171,0.4), transparent 60%),' +
            'radial-gradient(60% 70% at 0% 100%, rgba(20,34,72,0.75), transparent 70%),' +
            'linear-gradient(135deg, #1A3C8A 0%, #16305F 100%)',
        }}
      >
        <div
          className="lattice absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.35,
            WebkitMaskImage: 'radial-gradient(75% 100% at 50% 0%, #000 0%, transparent 90%)',
            maskImage: 'radial-gradient(75% 100% at 50% 0%, #000 0%, transparent 90%)',
          }}
        />
        <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl mb-3" style={{ color: '#E8C766' }}>{t[lang].commit.title}</h2>
            <p style={{ color: '#F4E2C7' }}>{lang === 'vi' ? 'Hân Nguyễn hướng đến việc xây dựng mối quan hệ lâu dài với doanh nghiệp trên cơ sở:' : 'Han Nguyen aims to build long-term relationships with businesses based on:'}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMMITMENTS_DATA[lang].map((c, i) => {
              const Icon = COMMIT_ICONS[i];
              return (
                <Reveal key={c.title} delay={i * 60} className="text-center">
                  <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#FDF1DF', boxShadow: '0 6px 14px rgba(0,0,0,0.3)' }}>
                    <Icon size={21} strokeWidth={1.6} color="#C9A227" />
                  </div>
                  <p className="font-bold text-[15px] uppercase tracking-wide mb-1.5" style={{ color: '#FDF1DF' }}>{c.title}</p>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: '#F4E2C7' }}>{c.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER: BẰNG CẤP & LIÊN HỆ — one combined section, matching the Navy & Gold reference */}
      <footer
        id="contact"
        className="relative overflow-hidden pt-12 md:pt-16 pb-0 scroll-mt-32"
        style={{
          background: 'linear-gradient(135deg, #2D65C4 0%, #4A83DA 15%, #92B9F0 38%, #F2F6FC 68%, #FFFFFF 100%)',
        }}
      >
        <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="mb-8">
            <h2 className="font-display font-black uppercase text-[32px] md:text-[40px] tracking-tight" style={{ color: '#E8C766' }}>
              {lang === 'vi' ? 'Bằng cấp & Liên hệ' : 'Degrees & Contact'}
            </h2>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-9 items-start">
            {/* Left Column: Featured Certificate – real scan, gold frame */}
            <div className="flex flex-col items-center lg:items-start pb-6 lg:pb-12">
              <div
                className="w-full max-w-[280px] cursor-zoom-in transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  padding: '8px',
                  background: 'linear-gradient(145deg, #F3DF9A 0%, #C9A038 50%, #E8D080 100%)',
                  borderRadius: '10px',
                  boxShadow: '0 14px 30px rgba(24,34,54,0.25)',
                }}
                onClick={() => setZoomedImg(bangCuNhan)}
              >
                <div style={{ background: '#FDF9F0', borderRadius: '4px', overflow: 'hidden', padding: '6px' }}>
                  <img
                    src={bangCuNhan}
                    alt={lang === 'vi' ? 'Bằng Cử nhân Kế toán – Kiểm toán' : 'Bachelor of Accounting'}
                    className="w-full h-auto block object-contain"
                    style={{ maxHeight: '340px' }}
                  />
                </div>
              </div>
              <p className="mt-3 font-bold text-[15px] text-[#172033] text-center w-full max-w-[280px]">
                {lang === 'vi' ? '✦ Cử nhân Kế toán – Kiểm toán' : '✦ Bachelor of Accounting'}
              </p>
            </div>

            {/* Right Column: Carousel on top */}
            <div className="flex flex-col h-full">
              {/* Carousel of 3 Certificates */}
              <div className="flex items-center gap-3.5 w-full mt-2 mb-5">
                <button
                  type="button"
                  onClick={prevCert}
                  aria-label="Previous Certificate"
                  className="w-9 h-9 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-[#333] hover:text-[#224DA7] hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 flex-grow">
                  {[0, 1, 2].map((offset) => {
                    const item = certItems[(certIdx + offset) % certItems.length];
                    return (
                      <div key={item.title + offset} className="flex flex-col items-center gap-2.5">
                        {/* Gold picture-frame border wrapping the real cert scan */}
                        <div
                          className="w-full cursor-zoom-in transition-all duration-200 hover:-translate-y-1"
                          style={{
                            padding: '6px',
                            background: 'linear-gradient(145deg, #F3DF9A 0%, #C9A038 50%, #E8D080 100%)',
                            borderRadius: '4px',
                            boxShadow: '0 8px 20px rgba(24,34,54,0.2)',
                          }}
                          onClick={() => setZoomedImg(item.img)}
                        >
                          <div style={{ background: '#FDFAF3', padding: '4px', borderRadius: '2px' }}>
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-auto block object-contain"
                              style={{ maxHeight: '160px' }}
                            />
                          </div>
                        </div>
                        <span className="font-bold text-[15.5px] text-[#111111] text-center tracking-tight">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={nextCert}
                  aria-label="Next Certificate"
                  className="w-9 h-9 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-[#333] hover:text-[#224DA7] hover:scale-110 active:scale-95 transition-all shrink-0"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Dark Contact Banner — full-bleed 100vw, break out of max-w-7xl */}
        <div
          className="relative mt-4"
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
          }}
        >
          {/* SVG Backdrop: soft diagonal slant + dual gold metallic ribbon */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-[1]"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mainGoldRibbon" x1="0%" y1="100%" x2="40%" y2="0%">
                <stop offset="0%" stopColor="#FBF0C8" />
                <stop offset="28%" stopColor="#DEB753" />
                <stop offset="65%" stopColor="#9C751E" />
                <stop offset="100%" stopColor="#E8CD78" />
              </linearGradient>
              <linearGradient id="subGoldLine" x1="0%" y1="100%" x2="40%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,245,215,0.7)" />
                <stop offset="50%" stopColor="rgba(222,183,83,0.85)" />
                <stop offset="100%" stopColor="rgba(255,245,215,0.4)" />
              </linearGradient>
            </defs>
            <path
              d="M 12,200 C 25,190 38,155 52,110 C 62,75 70,30 84,10 C 89,3 96,0 104,0 L 1000,0 L 1000,200 Z"
              fill="#282D36"
            />
            <path
              d="M 12,200 C 25,190 38,155 52,110 C 62,75 70,30 84,10 C 89,3 96,0 104,0"
              fill="none" stroke="url(#mainGoldRibbon)" strokeWidth="11" strokeLinecap="round"
            />
            <path
              d="M 28,200 C 40,190 53,155 67,110 C 77,75 85,30 99,10 C 104,3 111,0 119,0"
              fill="none" stroke="url(#subGoldLine)" strokeWidth="2.5"
            />
          </svg>

          {/* Mobile fallback solid bg */}
          <div className="sm:hidden absolute inset-0 bg-[#282D36] z-[1]" />

          {/* Inner content pinned to max-w-7xl */}
          <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 py-7 sm:pl-16">
              {/* Brand Monogram Logo */}
              <div className="w-[100px] h-[100px] flex items-center justify-center shrink-0">
                <img
                  src={logoMark}
                  alt="Logo Kế Toán Hân Nguyễn"
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>

              {/* Company Details */}
              <div className="flex flex-col gap-2 text-white min-w-0">
                <p className="font-extrabold uppercase tracking-wide text-[17px] md:text-[18.5px] leading-snug text-[#E6C870]">
                  {lang === 'vi'
                    ? 'Công ty TNHH Kế toán và Tư vấn Thuế Hân Nguyễn'
                    : 'Han Nguyen Accounting & Tax Consulting Co., Ltd'}
                </p>
                <a
                  href="tel:0989772101"
                  className="flex items-center gap-2.5 text-[15.5px] font-semibold text-white hover:text-[#E6C870] transition"
                >
                  <Phone size={16} className="text-[#E6C870] fill-current shrink-0" />
                  0989 772 101
                </a>
                <a
                  href="mailto:hannguyenkt2407@gmail.com"
                  className="flex items-center gap-2.5 text-[15.5px] text-white hover:text-[#E6C870] transition"
                >
                  <Mail size={16} className="text-[#E6C870] shrink-0" />
                  hannguyenkt2407@gmail.com
                </a>
                <p className="flex items-start gap-2.5 text-[15.5px] leading-snug text-white">
                  <MapPin size={16} className="text-[#E6C870] mt-0.5 shrink-0" />
                  {lang === 'vi'
                    ? 'Số 22, khu Tái định cư An Bình, phường An Bình, Cần Thơ'
                    : 'No. 22, An Binh Resettlement Area, An Binh Ward, Can Tho City'}
                </p>
                <p className="text-[14.5px] leading-relaxed text-[#EDE5DB] mt-0.5">
                  {lang === 'vi'
                    ? 'Hân hạnh phục vụ quý khách hàng trên phạm vi toàn quốc.'
                    : 'Proudly serving clients nationwide.'}
                </p>
              </div>

              {/* Google Map SVG placeholder */}
              <a
                href="https://maps.google.com/?q=Số+22+Khu+Tái+Định+Cư+An+Bình+Phường+An+Bình+Cần+Thơ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[200px] shrink-0 rounded-[10px] overflow-hidden hover:scale-105 transition-transform"
                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.4)', background: '#ECE8DF' }}
                title={lang === 'vi' ? 'Xem trên Google Maps' : 'View on Google Maps'}
              >
                <svg viewBox="0 0 300 180" className="w-full h-auto block">
                  <rect width="300" height="180" fill="#e8e4dc" />
                  <defs>
                    <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.6"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="180" fill="url(#mapGrid)" />
                  <path d="M0 70 Q80 60 150 75 Q220 90 300 70" fill="none" stroke="#fff" strokeWidth="8" />
                  <path d="M0 120 Q100 110 200 125 Q260 132 300 118" fill="none" stroke="#fff" strokeWidth="6" />
                  <path d="M100 0 Q105 45 108 90 Q110 135 112 180" fill="none" stroke="#fff" strokeWidth="7" />
                  <path d="M190 0 Q186 50 183 100 Q180 140 178 180" fill="none" stroke="#fff" strokeWidth="6" />
                  <path d="M0 145 Q70 148 150 143 Q230 138 300 142" fill="none" stroke="#a8c8e8" strokeWidth="10" opacity="0.7"/>
                  <path d="M150 20 C138 20 128 30 128 42 C128 58 150 82 150 82 C150 82 172 58 172 42 C172 30 162 20 150 20Z" fill="#d93025"/>
                  <circle cx="150" cy="42" r="8" fill="white"/>
                  <rect x="155" y="22" width="80" height="20" rx="3" fill="white" opacity="0.9"/>
                  <text x="160" y="35" fontFamily="sans-serif" fontSize="7.5" fill="#333" fontWeight="600">Số 22, An Bình</text>
                  <text x="6" y="174" fontFamily="sans-serif" fontSize="10" fill="#555" fontWeight="700">Google</text>
                  <text x="220" y="174" fontFamily="sans-serif" fontSize="8" fill="#777">Map data ©2026</text>
                </svg>
              </a>
            </div>

            {/* Copyright — merged into dark banner, no separate background */}
            <p className="text-center text-[12.5px] py-4 border-t" style={{ color: 'rgba(255,255,255,0.35)', borderColor: 'rgba(255,255,255,0.08)' }}>
              &copy; 2026 Công ty TNHH Kế toán và tư vấn thuế Hân Nguyễn. All rights reserved.
            </p>
          </div>
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
            alt="Zoomed"
            className="max-w-[95vw] max-h-[95vh] object-contain drop-shadow-2xl rounded-sm"
          />
        </div>
      )}
    </div>
  );
}

export default App;
