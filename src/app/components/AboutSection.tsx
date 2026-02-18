import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  'Diagnóstico preciso antes de qualquer linha de código.',
  'Missão dada é missão cumprida.',
  'Sistemas que não travam sob pressão.',
  'Simplicidade como estratégia, não limitação.',
];

const pillars = [
  '5 anos de Exército Brasileiro.',
  'Resolução de problemas como hábito.',
  'Adaptação rápida a novos cenários.',
  'Visão estratégica além da implementação.',
];

const stack = [
  'React · Next.js · TypeScript',
  'Tailwind · Interfaces desktop',
  'Python · FastAPI · SQLite · PostgreSQL',
  'n8n · Automação de fluxos',
  'LLMs aplicados a operação',
];

function BentoCard({ 
  children, 
  className = "",
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Aumentei um pouco a amplitude da rotação para acompanhar o novo zoom
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      data-about-card
      // Adicionei 'z-10' base e 'preserve-3d'
      className={`relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60 group cursor-pointer z-10 ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        // O segredo da nitidez: perspective no elemento
        perspective: 1000, 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        // AUMENTO DO ZOOM: De 1.05 para 1.15
        scale: 1.15, 
        // CRUCIAL: Traz o card para frente de tudo
        zIndex: 50,
        boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.5)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* TRUQUE DE NITIDEZ: 
         Envolver o conteúdo em um translateZ força a GPU a renderizar
         o texto como uma camada separada, evitando o pixelamento.
      */}
      <div style={{ transform: "translateZ(1px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      const cards = cardsContainerRef.current?.querySelectorAll('[data-about-card]');
      if (!cards) return;
      
      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 text-xs font-mono text-blue-300">
            03
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              Sobre
            </h2>
            <p className="text-sm text-slate-400">
              Uma trajetória que conecta contexto militar, chão de fábrica e arquitetura de software.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
        <motion.div
          className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
        >
          <p>
            Minha trajetória começa no Exército Brasileiro, no pelotão de manutenção
            e transporte. Local onde disciplina, resiliência e foco deixaram de ser palavras bonitas e
            se tornaram prática diária.
          </p>
          <p>
            Hoje, essa mesma mentalidade é aplicada na arquitetura de softwares e automações
            para indústria. Cada projeto parte de diagnóstico preciso: entender onde o processo
            trava, para então desenhar a solução mais rápida, segura e executável.
          </p>
          <p>
            Programar é a ferramenta para eliminar problemas operacionais, otimizar processos e criar sistemas que trabalham para o negócio.
          </p>
        </motion.div>

        <div ref={cardsContainerRef} className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
            <BentoCard className="p-4 space-y-2">
              <div className="relative">
                <p className="font-mono tracking-[0.2em] text-slate-400 uppercase text-[11px]">
                  Princípios
                </p>
                <ul className="space-y-1.5 text-xs leading-relaxed mt-2">
                  {principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">·</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>

            <BentoCard className="p-4 space-y-2">
              <div className="relative">
                <p className="font-mono tracking-[0.2em] text-slate-400 uppercase text-[11px]">
                  Pilares
                </p>
                <ul className="space-y-1.5 text-xs leading-relaxed mt-2">
                  {pillars.map((pillar, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">·</span>
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          </div>

          <BentoCard className="p-4 space-y-3">
            <div className="relative">
              <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase">
                Stack de atuação
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-default hover:bg-slate-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}