import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

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

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 text-xs font-mono text-blue-300">
            03
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-50">
              The System Architect
            </h2>
            <p className="text-sm text-slate-400">
              Uma trajetória que conecta contexto militar, chão de fábrica e arquitetura de
              software.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Story */}
        <motion.div
          className="space-y-4 text-sm text-slate-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            A trajetória de Guilherme começa no Exército Brasileiro, em um pelotão de manutenção
            e transporte. Ali, disciplina, resiliência e foco deixaram de ser palavras bonitas e
            se tornaram prática diária.
          </p>
          <p>
            Hoje, essa mesma mentalidade é aplicada na arquitetura de softwares e automações
            para indústria. Cada projeto parte de diagnóstico preciso: entender onde o processo
            trava, para então desenhar a solução mais rápida, segura e executável.
          </p>
          <p>
            Programar, aqui, não é um fim em si mesmo. É a ferramenta para eliminar gargalos,
            proteger operação e criar ambientes onde a decisão certa é a decisão óbvia.
          </p>
        </motion.div>

        {/* Details */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
            {/* Principles */}
            <motion.div 
              className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-4 space-y-2"
              whileHover={{ 
                borderColor: 'rgba(37, 99, 235, 0.3)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}
            >
              <p className="font-mono tracking-[0.2em] text-slate-400 uppercase text-[11px]">
                Princípios
              </p>
              <ul className="space-y-1.5 text-xs leading-relaxed">
                {principles.map((principle, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1">·</span>
                    <span>{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pillars */}
            <motion.div 
              className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-4 space-y-2"
              whileHover={{ 
                borderColor: 'rgba(37, 99, 235, 0.3)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}
            >
              <p className="font-mono tracking-[0.2em] text-slate-400 uppercase text-[11px]">
                Pilares
              </p>
              <ul className="space-y-1.5 text-xs leading-relaxed">
                {pillars.map((pillar, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1">·</span>
                    <span>{pillar}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stack */}
          <motion.div 
            className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-4 space-y-3"
            whileHover={{ 
              borderColor: 'rgba(37, 99, 235, 0.3)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            }}
          >
            <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase">
              Stack de atuação
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
