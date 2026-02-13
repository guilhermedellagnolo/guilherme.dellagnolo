import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 sm:py-20 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Photo Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" />
                <div className="relative">
                  <div className="absolute -inset-0.5 border-2 border-blue-400 rounded-full" />
                  <img
                    src="/copia.png"
                    alt="Guilherme - Arquiteto de Sistemas"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-2xl transform transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-200 rounded-full"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-blue-700 tracking-wider">
                [ DISPONIVEL PARA PROJETOS ] 
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0F172A] mb-4 tracking-tight"
            >
              DESENVOLVEDOR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                DE SISTEMAS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Desenvolvendo sistemas resistentes que curam dores reais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projetos"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center"
              >
                VER PROJETOS
              </a>
              <a
                href="https://wa.me/5547996589483"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center"
              >
                ENTRE EM CONTATO
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
