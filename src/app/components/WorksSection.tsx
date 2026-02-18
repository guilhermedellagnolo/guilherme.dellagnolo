import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('[data-card]');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          rotateX: 20,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section id="works" ref={ref} className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 text-xs font-mono text-blue-300">
            01
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              Evidence Layer
            </h2>
            <p className="text-sm text-slate-400">
              Projetos selecionados que demonstram arquitetura pensada para ambientes agressivos.
            </p>
          </div>
        </div>
      </motion.div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* T3 Software Card */}
        <article
          data-card
          className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 group"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                  T3 SOFTWARE · Sistema de apontamento em tempo real
                </h3>
                <p className="text-xs font-mono tracking-[0.18em] text-blue-300 uppercase mt-1">
                  100% Offline · Chão de fábrica · Industrial
                </p>
              </div>
              <motion.div
                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[11px] font-mono text-emerald-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Zero Data Loss
              </motion.div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                O T3 elimina a cegueira operacional ao capturar custo-minuto real no chão de
                fábrica. Em vez de relatórios atrasados e planilhas frágeis, cada apontamento do
                operador se torna um ponto de decisão financeira em tempo quase real.
              </p>
              <p>
                A arquitetura foi desenhada para operar mesmo em cenários extremos: rede
                instável, energia oscilando e máquinas antigas ainda em produção.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Stack
                </p>
                <p>Python, FastAPI, Pandas, SQLite, TCP/IP, CustomTkinter</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Resultados
                </p>
                <p>100% uptime, zero perda de dados, performance estável em hardware legado.</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 space-y-1">
                <p className="text-[11px] font-mono tracking-[0.16em] text-slate-400 uppercase">
                  Decisões de arquitetura
                </p>
                <p>Offline-first como fundação, interface de baixa fricção, resiliência extrema.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Future Projects Card */}
        <article
          data-card
          className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 group"
          style={{ perspective: '1000px' }}
        >
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                  Próximos casos · Industrial Systems
                </h3>
                <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase mt-1">
                  Roadmap de laboratório
                </p>
              </div>
              <motion.span
                className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-[11px] font-mono text-amber-200 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Em evolução
              </motion.span>
            </div>
            <p className="text-sm text-slate-300">
              Espaço reservado para novos sistemas industriais, automações e dashboards de alta
              densidade que seguem a mesma filosofia do T3: menos ornamentação, mais impacto
              financeiro direto.
            </p>
            <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside marker:text-blue-400">
              <li>Monitoramento em tempo real de linhas produtivas.</li>
              <li>Ferramentas internas para times de operação e manutenção.</li>
              <li>Interfaces táticas para tomada de decisão em chão de fábrica.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}