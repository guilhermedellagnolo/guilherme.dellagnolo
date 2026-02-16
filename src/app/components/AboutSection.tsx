import { motion } from "motion/react";
import { Shield, Zap, Target, Award } from "lucide-react";
import { FadeInUp } from "./FadeInUp";

export function AboutSection() {
  const stats = [
    {
      icon: Shield,
      value: "5 ANOS",
      label: "Exército Brasileiro",
      description: "Liderança, resiliência e responsabilidade."
    },
    {
      icon: Zap,
      value: "RESOLUÇÃO",
      label: "SOLUCIONO PROBLEMAS",
      description: "Sempre buscando soluções para facilitar processos."
    },
    {
      icon: Target,
      value: "FACIL ADAPTAÇÃO",
      label: "Aprendizado Contínuo",
      description: "Adaptação rápida a novas tecnologias e cenários."
    },
    {
      icon: Award,
      value: "ESTRATÉGIA",
      label: "Visão",
      description: "Não apenas executo, mas entendo o impacto no negócio."
    }
  ];

  return (
    <section id="sobre" className="py-24 relative md:-mt-24 z-20 bg-white">
      <div className="container mx-auto px-4 mb-16">
        <FadeInUp className="about-header max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-600 font-mono text-sm tracking-wider">01 // ORIGEM</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
            SOBRE MIM
          </h2>
        </FadeInUp>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="about-left space-y-6">
            <FadeInUp delay={0.1}>
              <motion.div
                className="bg-white/80 backdrop-blur-md border-2 border-slate-200 rounded-2xl p-8 shadow-xl"
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-3">
                  <div className="w-1 h-8 bg-blue-600 rounded-full" />
                  QUEM SOU EU
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Minha trajetória começa no Exército Brasileiro, onde atuei por 5 anos como Cabo no Pelotão de Manutenção e Transporte onde desenvolvi pilares inegociáveis: disciplina, resiliência, mentalidade e foco. Aprendi, na prática a diagnosticar processos e encontrar a solução mais rápida e segura, muitas vezes com recursos limitados.
                  </p>
                  <p>
                    Hoje, aplico essa mesma mentalidade na arquitetura e desenvolvimento de softwares e automações que resolvem problemas reais, especialmente no contexto industrial.
                  </p>
                  <p>
                    Não vejo a programação apenas como linhas de código, mas como a ferramenta definitiva para resolver gargalos. Minha abordagem é direta: identificar onde o processo trava, arquitetar a solução e implementa-la.
                  </p>
                </div>
              </motion.div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-blue-50/80 to-slate-50/80 backdrop-blur-md border-2 border-blue-200 rounded-2xl p-8"
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <h4 className="text-lg font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Princípios
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono text-sm mt-0.5">▸</span>
                    <span>Diagnóstico Preciso: Antes de codar, entender a causa real do problema.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono text-sm mt-0.5">▸</span>
                    <span>Missão Dada é Missão Cumprida: Foco total na entrega e no prazo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono text-sm mt-0.5">▸</span>
                    <span>Resiliência: Sistemas que não travam sob pressão.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono text-sm mt-0.5">▸</span>
                    <span>Simplicidade: soluções simples que geram resultados.</span>
                  </li>
                </ul>
              </motion.div>
            </FadeInUp>
          </div>

          <div className="about-right space-y-6 hidden md:block">
            <FadeInUp delay={0.2}>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-blue-600 rounded-full" />
                  PILARES DA MINHA ATUAÇÃO
                </h3>

                <div className="grid gap-6">
                  {stats.map((stat, index) => (
                    <FadeInUp key={index} delay={0.3 + index * 0.1}>
                      <div className="about-stat-card group relative bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 border-2 border-blue-300 rounded-lg group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                            <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <div className="text-3xl font-black text-blue-600 mb-1">
                              {stat.value}
                            </div>
                            <div className="font-semibold text-[#0F172A] mb-1">
                              {stat.label}
                            </div>
                            <div className="text-sm text-slate-600">
                              {stat.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
