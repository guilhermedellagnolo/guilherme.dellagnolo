import { motion } from "motion/react";
import { CircleDollarSign, Clock3, Target } from "lucide-react";

export function T3IntelSection() {
  const cards = [
    {
      icon: CircleDollarSign,
      tag: "MARGEM DE CONTRIBUIÇÃO",
      title: "Lucro Real por O.S.",
      description: "Não espere o fim do mês. Veja a margem de contribuição de cada O.S. e Máquina no instante em que ela acontece. Identifique qual produto está pagando as contas e qual está drenando o caixa.",
      delay: 0.1,
    },
    {
      icon: Clock3,
      tag: "GARGALOS EM TEMPO REAL",
      title: "Cronometragem da Verdade",
      description: "Um setup de 15 minutos que virou 1 hora? O T3 aponta. Identifique pausas excessivas e setups lentos em tempo real para corrigir o processo antes de perder o turno inteiro.",
      delay: 0.2,
    },
    {
      icon: Target,
      tag: "ORÇAMENTO ESTRATÉGICO",
      title: "Orçamentos de Precisão",
      description: 'Pare de orçar no "chute". Use o histórico real das últimas 100 ordens para criar orçamentos futuros com precisão cirúrgica. Saiba exatamente quanto tempo leva para produzir, não quanto você "acha" que leva.',
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            A INTELIGÊNCIA <span className="text-amber-400">//</span>{" "}
            <span className="text-amber-400">TOMADA DE DECISÃO</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            O T3 não é só apontamento. É um motor de decisão para diretoria, PCP e
            financeiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-colors"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40">
                  <card.icon className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/60 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
