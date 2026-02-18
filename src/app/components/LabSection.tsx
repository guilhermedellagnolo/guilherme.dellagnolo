import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Monitor, Workflow, Grid3x3 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const labProjects = [
  {
    icon: Monitor,
    title: 'Offline-First Dashboards',
    description: 'Explorações de dashboards que continuam entregando sinal mesmo sob perda de conectividade, priorizando leitura rápida para operação.',
  },
  {
    icon: Workflow,
    title: 'Automação com n8n',
    description: 'Workflows que conectam chão de fábrica, ERPs e camadas de análise, usando n8n e Python para automações auditáveis.',
  },
  {
    icon: Grid3x3,
    title: 'Interfaces de alta densidade',
    description: 'Experimentos de UI que equilibram muitos dados em pouco espaço, sem abrir mão de legibilidade e foco.',
  },
];

export function LabSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('[data-lab-card]');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <section id="lab" ref={ref} className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 text-xs font-mono text-blue-300">
            02
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              The Lab · Applied Computing Playground
            </h2>
            <p className="text-sm text-slate-400">
              Onde conceitos de arquitetura saem do papel e viram protótipos de alto impacto.
            </p>
          </div>
        </div>
      </motion.div>

      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {labProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article
              key={project.title}
              data-lab-card
              className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 space-y-3 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start gap-3">
                <motion.div 
                  className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase">
                    {project.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}