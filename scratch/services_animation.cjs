const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add images to SERVICES
content = content.replace(
  "icon: Calculator,",
  "img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',\n    icon: Calculator,"
);
content = content.replace(
  "icon: Settings2,",
  "img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',\n    icon: Settings2,"
);
content = content.replace(
  "icon: ShieldCheck,",
  "img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',\n    icon: ShieldCheck,"
);
content = content.replace(
  "icon: Building2,",
  "img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',\n    icon: Building2,"
);
content = content.replace(
  "icon: Globe2,",
  "img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',\n    icon: Globe2,"
);

// 2. Add useScrollSpy hook before App
const hookCode = `
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
`;
if (!content.includes('useScrollSpy')) {
  content = content.replace('function App() {', hookCode + '\nfunction App() {');
}

// 3. Update App component state
content = content.replace(
  'const [submitted, setSubmitted] = useState(false);',
  `const [submitted, setSubmitted] = useState(false);
  
  // Create refs for scroll spy
  const serviceRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const activeServiceIndex = useScrollSpy(serviceRefs, { rootMargin: '-40% 0px -40% 0px' });`
);

// 4. Replace the Services Section markup
const oldServices = `          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const isOpen = expandedService === i;
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 60}
                  className={\`bg-white p-10 border border-gray-100 transition duration-300 card-hover \${i >= 3 ? 'md:col-span-1' : ''}\`}
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
                    <ChevronDown size={14} className={\`transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
                  </button>
                </Reveal>
              );
            })}
          </div>`;

const newServices = `          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start relative">
            {/* Sticky Image on the Left */}
            <div className="hidden md:block md:col-span-5 sticky top-32 z-10 h-[60vh]">
              <div className="w-full h-full relative rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                {SERVICES.map((s, i) => (
                  <img 
                    key={s.title}
                    src={s.img} 
                    alt={s.title}
                    className={\`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out \${activeServiceIndex === i ? 'opacity-100' : 'opacity-0'}\`}
                  />
                ))}
                <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
              </div>
            </div>
            
            {/* Scrollable Content on the Right */}
            <div className="md:col-span-7 pb-32">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const isActive = activeServiceIndex === i;
                return (
                  <div 
                    key={s.title} 
                    ref={serviceRefs[i]}
                    className={\`py-16 md:py-32 border-b border-gray-200/50 transition-opacity duration-500 \${isActive ? 'opacity-100' : 'opacity-30'}\`}
                  >
                    {/* Mobile Image */}
                    <div className="block md:hidden w-full h-48 mb-8 rounded-sm overflow-hidden shadow-md">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="w-16 h-16 bg-gold-light/20 flex items-center justify-center text-gold mb-8 rounded-sm">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-serif text-dark font-bold mb-6">{s.title}</h3>
                    <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-lg">{s.note}</p>

                    <ul className="text-sm text-gray-500 space-y-4 border-l-2 border-gold/30 pl-6">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 font-medium">
                          <CheckCircle2 size={16} className="text-gold shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>`;

content = content.replace(oldServices, newServices);

fs.writeFileSync('src/App.jsx', content);
