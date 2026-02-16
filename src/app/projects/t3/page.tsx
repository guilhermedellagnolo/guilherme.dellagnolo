import { useState } from "react";
import { motion } from "motion/react";
import {
  FileX2,
  TrendingDown,
  AlertTriangle,
  Wifi,
  WifiOff,
  Zap,
  Layers,
  Shield,
  ArrowRight,
  ExternalLink,
  CircleDollarSign,
  Clock3,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

type T3ProjectPageProps = {
  onBackToPortfolio?: () => void;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/fotos/Apontamento.png",
    alt: "Tela de apontamento de produção no sistema T3",
    label: "APONTAMENTO",
  },
  {
    src: "/fotos/Torre de controle.png",
    alt: "Tela da torre de controle central do sistema T3",
    label: "TORRE DE CONTROLE",
  },
  {
    src: "/fotos/Area de cadastro.png",
    alt: "Tela de área de cadastro de entidades do sistema T3",
    label: "ÁREA DE CADASTRO",
  },
  {
    src: "/fotos/Historico.png",
    alt: "Tela de histórico de registros e eventos do sistema T3",
    label: "HISTÓRICO",
  },
  {
    src: "/fotos/Visão geral.png",
    alt: "Visão geral consolidada das máquinas e ordens de serviço",
    label: "VISÃO GERAL",
  },
  {
    src: "/fotos/Contribuição por maquina.png",
    alt: "Contribuição financeira por máquina",
    label: "CONTRIBUIÇÃO POR MÁQUINA",
  },
  {
    src: "/fotos/Resultados diários.png",
    alt: "Resultados diários consolidados do turno",
    label: "RESULTADOS DIÁRIOS",
  },
  {
    src: "/fotos/Contribuição por O.S.png",
    alt: "Contribuição financeira por ordem de serviço",
    label: "CONTRIBUIÇÃO POR O.S",
  },
  {
    src: "/fotos/Resultados da O.S.png",
    alt: "Resultados detalhados por ordem de serviço",
    label: "RESULTADOS DA O.S",
  },
  {
    src: "/fotos/Resultado dos operadores.png",
    alt: "Resultado individual por operador",
    label: "RESULTADO DOS OPERADORES",
  },
];

export default function T3ProjectPage({ onBackToPortfolio }: T3ProjectPageProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackClick = () => {
    if (onBackToPortfolio) {
      onBackToPortfolio();
    } else {
      window.history.pushState({}, "", "/");
      window.location.reload();
    }
  };

  return (
    <motion.div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#1e293b 1px, transparent 1px),
              linear-gradient(90deg, #1e293b 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
                onClick={scrollToDemo}
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

      <section id="demo" className="relative py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              O <span className="text-amber-400">HERÓI</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              T3 SOFTWARE elimina o abismo entre os operadores e a gestão. O operador realiza o apontametno com apenas 3 inputs, o motor de cálculo processa o apontamento em tempo real. O resultado é uma visão consolidada da lucratividade, permitindo que cada minuto de setup ou pausas indesejadas seja medido para lhe mostrar quanto isto esta lhe custando.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-amber-400 rounded-full" />
                Demonstração em vídeo do sistema T3
              </h3>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/60 px-4 py-1 text-[10px] md:text-xs font-mono tracking-[0.16em] text-amber-300">
                <span>CAPTURA REAL DO SISTEMA T3 EM PRODUÇÃO</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                <video
                  src="/t3video.mp4"
                  controls
                  muted
                  className="w-full h-auto max-h-[640px] md:max-h-[720px] object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-amber-400 rounded-full" />
                Telas reais do sistema T3
              </h3>
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {galleryImages.map((image) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 cursor-pointer text-left transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:-translate-y-1"
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-40 object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 px-3 py-2 text-[11px] font-mono tracking-[0.16em] text-gray-200">
                      {image.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-colors"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40">
                  <CircleDollarSign className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  MARGEM DE CONTRIBUIÇÃO
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Lucro Real por O.S.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Não espere o fim do mês. Veja a margem de contribuição de cada O.S. e
                Máquina no instante em que ela acontece. Identifique qual produto está
                pagando as contas e qual está drenando o caixa.
              </p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/60 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-colors"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40">
                  <Clock3 className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  GARGALOS EM TEMPO REAL
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Cronometragem da Verdade
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Um setup de 15 minutos que virou 1 hora? O T3 aponta. Identifique pausas
                excessivas e setups lentos em tempo real para corrigir o processo antes
                de perder o turno inteiro.
              </p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/60 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-colors"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  ORÇAMENTO ESTRATÉGICO
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Orçamentos de Precisão
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Pare de orçar no &quot;chute&quot;. Use o histórico real das últimas 100
                ordens para criar orçamentos futuros com precisão cirúrgica. Saiba
                exatamente quanto tempo leva para produzir, não quanto você &quot;acha&quot;
                que leva.
              </p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

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
                onClick={handleBackClick}
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

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 text-center text-xs font-mono tracking-[0.16em] text-gray-400">
              {activeImage.label}
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-2">
              <ImageWithFallback
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
