const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add RevealLine component before App
const revealLineCode = `
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
`;

if (!content.includes('function RevealLine')) {
  content = content.replace('function App() {', revealLineCode + '\nfunction App() {');
}

// 2. Update PROCESS SECTION
const oldProcess = `          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-10 gap-x-2">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-gray-200 z-0" />
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 50} className="relative z-10 flex flex-col items-center text-center px-2">
                <div
                  className={\`w-12 h-12 flex items-center justify-center rounded-full mb-4 border-2 font-serif text-xl \${
                    p.active ? 'bg-gold border-gold text-white' : 'bg-white border-gold text-gold'
                  }\`}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-2">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}`;

const newProcess = `          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-10 gap-x-2">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-gray-200 z-0" />
            <RevealLine />
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 350} className="relative z-10 flex flex-col items-center text-center px-2 group">
                <div
                  className={\`w-12 h-12 flex items-center justify-center rounded-full mb-4 border-2 font-serif text-xl transition-all duration-500 \${
                    p.active ? 'bg-gold border-gold text-white shadow-[0_0_15px_rgba(197,160,89,0.6)]' : 'bg-white border-gray-200 text-gray-400 group-[.is-visible]:border-gold group-[.is-visible]:text-gold group-[.is-visible]:shadow-[0_0_15px_rgba(197,160,89,0.4)] bg-white'
                  }\`}
                >
                  {i + 1}
                </div>
                <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-2 transition-colors duration-500">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed transition-opacity duration-500">{p.desc}</p>
              </Reveal>
            ))}`;

content = content.replace(oldProcess, newProcess);
fs.writeFileSync('src/App.jsx', content);
