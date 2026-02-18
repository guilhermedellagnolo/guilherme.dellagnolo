import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      data-card
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

export function WorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="works" ref={ref} className="space-y-8 scroll-mt-24">
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
            01
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              PROJETOS
            </h2>
            <p className="text-sm text-slate-400">
              Foco em arquitetura robusta e impacto real. 
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8" style={{ perspective: '2000px' }}>
        <ProjectCard delay={0.1}>
          <div className="relative p-6 space-y-4" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                  T3 SOFTWARE · Sistema de apontamento em tempo real
                </h3>
                <p className="text-xs font-mono tracking-[0.18em] text-blue-300 uppercase mt-1">
                  100% Offline · Chão de fábrica · Eficiente
                </p>
              </div>
              <motion.div
                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[11px] font-mono text-emerald-300 whitespace-nowrap"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                VALIDADO
              </motion.div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                O T3 elimina a cegueira operacional ao capturar custo-minuto real no chão de
                fábrica. Em vez de relatórios atrasados e planilhas frágeis, cada apontamento do
                operador se torna um ponto de decisão financeira em tempo quase real.
              </p>
              <p>
                A arquitetura foi desenhada para operar mesmo com rede
                instável e computadores antigos.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1 backdrop-blur-sm">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Stack
                </p>
                <p>Python, FastAPI, Pandas, SQLite, TCP/IP, CustomTkinter</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1 backdrop-blur-sm">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Resultados
                </p>
                <p>100% uptime, zero perda de dados, performance estável em hardware legado.</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1 backdrop-blur-sm">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Decisões de arquitetura
                </p>
                <p>Offline-first como fundação, interface de baixa fricção, resiliência extrema.</p>
              </div>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard delay={0.2}>
          <div className="relative p-6 space-y-4 h-full flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    Sistemas em Desenvolvimento
                  </h3>
                  <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase mt-1">
                    onde conceitos saem do papel e viram projetos de grandes resultados
                  </p>
                </div>
                <motion.span
                  className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-[11px] font-mono text-amber-200 whitespace-nowrap"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  PRODUZINDO
                </motion.span>
              </div>
              <p className="text-sm text-slate-300">
                Desenvolvimento de 'funcionários digitais' para acelerar a entrega técnica e eliminar trabalho manual repetitivo.
              </p>
              <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside marker:text-blue-400 mt-4">
                <li>Gerador de Front-end: Agente que converte requisitos em código de interface pronto.</li>
                <li>Execução de Tarefas: Bots autônomos para rotinas operacionais simples.</li>
              </ul>
            </div>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}