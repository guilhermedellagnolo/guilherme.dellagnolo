import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type T3HeroProps = {
  onScrollToDemo: () => void;
};

export function T3Hero({ onScrollToDemo }: T3HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/90 to-black" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/60 border border-amber-400/20 rounded-xl px-6 md:px-10 py-8 md:py-10 backdrop-blur text-left">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-400/40 rounded-full mb-6"
            >
              <span className="text-amber-400 font-mono text-sm font-bold">
                ⚠ ATENÇÃO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mb-6"
            >
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                APONTAMENTO EM TEMPO REAL
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-amber-400">
                CHEGA DE DADOS MORTOS
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-white">
                T3 SOFTWARE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-3xl mb-10"
            >
              Elimine o "achismo" do chão de fábrica. Tenha um Raio-X financeiro de cada
              máquina e ordem de serviço em tempo real, direto do apontamento da máquina.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onScrollToDemo}
              className="group relative px-10 py-4 bg-amber-400 text-slate-950 font-bold text-lg rounded-lg overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-amber-400"
              />
              <span className="relative z-10 flex items-center gap-2">
                SOLICITAR PERÍODO DE TESTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4 text-[11px] md:text-xs font-mono text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>SIMPLES</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>RAPIDO</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>SEGURO</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
