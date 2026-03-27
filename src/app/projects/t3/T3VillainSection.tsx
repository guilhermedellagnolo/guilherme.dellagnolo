import { motion } from "motion/react";
import { FileX2, TrendingDown, AlertTriangle } from "lucide-react";

export function T3VillainSection() {
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
            O <span className="text-amber-400">VILÃO</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Você só descobre o prejuízo{" "}
            <span className="text-amber-400 font-bold">30 dias depois</span>.
            <br />
            No T3 voce descobre assim que finaliza o{" "}
            <span className="text-amber-400 font-bold">apontamento</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-6"
            >
              <FileX2 className="w-16 h-16 text-amber-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Excel em Chamas</h3>
            <p className="text-gray-400">
              Planilhas desatualizadas, dados conflitantes, decisões baseadas em
              informações de ontem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-6"
            >
              <AlertTriangle className="w-16 h-16 text-amber-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Papel = Dados Mortos</h3>
            <p className="text-gray-400">
              Apontamentos manuscritos são enterrados em pastas. Quando você precisa, já
              é tarde demais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden"
          >
            <div className="mb-6">
              <TrendingDown className="w-16 h-16 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lucro Perdido</h3>
            <p className="text-gray-400">
              Cada minuto de máquina parada é dinheiro que nunca volta.
            </p>
            <motion.div
              animate={{ scaleY: [0, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
