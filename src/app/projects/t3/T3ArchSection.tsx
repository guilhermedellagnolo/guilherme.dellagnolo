import { motion } from "motion/react";
import { Wifi, WifiOff, Zap, Layers } from "lucide-react";

export function T3ArchSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            O <span className="text-amber-400">SEGREDO</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Arquitetura de missão crítica</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <WifiOff className="w-12 h-12 text-amber-400" />
                <div className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                  CORE
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">100% OFFLINE</h3>
              <p className="text-gray-400 mb-4">
                Sistema funciona sem internet. Zero dependência de nuvem. Dados locais,
                decisões rápidas.
              </p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <Wifi className="w-4 h-4 line-through opacity-50" />
                <span>Wifi OFF = T3 ON </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <Zap className="w-12 h-12 text-amber-400" />
                <div className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                  PERFORMANCE
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">LATÊNCIA ZERO</h3>
              <p className="text-gray-400 mb-4">
                Resposta em menos de 16ms. Arquitetura edge-native. Dados processados
                onde são gerados.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-1 bg-amber-500/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-amber-400"
                  />
                </div>
                <span className="text-amber-400 font-mono">&lt;16ms</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <Layers className="w-12 h-12 text-amber-400" />
                <div className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                  FLEXÍVEL
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">HARDWARE</h3>
              <p className="text-gray-400 mb-4">
                Roda em tablet velho, PC novo. Você escolhe o hardware.
                Nós entregamos a solução.
              </p>
              <div className="flex items-center gap-3 text-sm text-amber-400">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-gray-400">Qualquer dispositivo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
