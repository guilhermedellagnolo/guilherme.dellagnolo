import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type T3FooterProps = {
  onBackClick: () => void;
};

export function T3Footer({ onBackClick }: T3FooterProps) {
  return (
    <footer className="relative py-16 sm:py-20 px-4 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções que geram resultado.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Você não precisa de mais um sistema cheio de botões que ninguém usa. Você precisa de inteligência de dados. Meu trabalho é transformar a complexidade em oportunidades de melhoria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/5547996589483"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-400 text-slate-950 font-bold text-lg rounded-lg hover:bg-amber-500 text-center"
            >
              ENTRAR EM CONTATO
            </motion.a>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackClick}
              className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold text-lg rounded-lg flex items-center justify-center gap-2 hover:bg-amber-500/10"
            >
              VOLTAR AO PORTFÓLIO
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-center gap-8 text-sm font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>T3 SOFTWARE</span>
            </div>
            <span>|</span>
            <span>APONTAMENTO EM TEMPO REAL</span>
            <span>|</span>
            <span>2026</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
