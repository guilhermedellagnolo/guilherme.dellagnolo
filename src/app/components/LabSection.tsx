import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Monitor, Workflow, Grid3x3 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const labProjects = [
  {
    icon: Monitor,
    title: 'Interfaces',
    description: 'Dashboards não são decoração, são ferramentas que permitem leitura imediata do cenário e tomada de decisão em segundos.',
  },
  {
    icon: Workflow,
    title: 'Automação com n8n',
    description: 'Sistemas que trabalham 24/7. Transformando processos manuais em fluxos autônomos que eliminam o erro humano e garantem resultados melhores.',
  },
  {
    icon: Grid3x3,
    title: 'Sistemas Offline-First',
    description: 'Softwares projetados para o pior cenário. Arquiteturas Offline-First que garantem que sua operação continue rodando e faturando, mesmo quando a internet cai.',
  },
];

function LabCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
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
    <motion.article
      ref={cardRef}
      data-lab-card
      className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 group cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay,
      }}
      whileHover={{
        scale: 1.02,
        z: 50,
        boxShadow: "0 25px 70px -12px rgba(37, 99, 235, 0.35)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        }
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
      
      {children}
    </motion.article>
  );
}

export function LabSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      const cards = cardsRef.current?.querySelectorAll('[data-lab-card]');
      if (!cards) return;
      
      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="lab" ref={ref} className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 text-xs font-mono text-blue-300">
            02
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              · Capacidades Estratégicas
            </h2>
            <p className="text-sm text-slate-400">
              Onde conceitos saem do papel e viram projetos de grandes resultados.
            </p>
          </div>
        </div>
      </motion.div>

      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '2000px' }}>
        {labProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <LabCard key={project.title} delay={0.1 * (index + 1)}>
              <div className="relative p-5 space-y-3" style={{ transform: 'translateZ(30px)' }}>
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-sm font-mono tracking-[0.18em] text-slate-50 uppercase">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </LabCard>
          );
        })}
      </div>
    </section>
  );
}