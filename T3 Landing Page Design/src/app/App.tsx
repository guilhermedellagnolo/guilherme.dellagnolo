import { motion } from 'motion/react';
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
} from 'lucide-react';
import { Terminal } from './components/terminal';
import { Tower } from './components/tower';
import { Dashboard } from './components/dashboard';

export default function App() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#00ff88 1px, transparent 1px),
              linear-gradient(90deg, #00ff88 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffaa00]/5 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-[#ff4444]/10 border border-[#ff4444]/30 rounded-full mb-8"
          >
            <span className="text-[#ff4444] font-mono text-sm font-bold">
              ⚠ ALERTA CRÍTICO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="block text-5xl md:text-7xl font-bold mb-2 text-white">
              A CEGUEIRA
            </span>
            <span className="block text-5xl md:text-7xl font-bold text-[#ff4444]">
              OPERACIONAL
            </span>
            <span className="block text-5xl md:text-7xl font-bold mt-2 text-white">
              CUSTA CARO.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Transforme o caos do chão de fábrica em dados financeiros em tempo real.
            <br />
            <span className="text-[#00ff88]">Sem internet.</span>{' '}
            <span className="text-[#ffaa00]">Sem desculpas.</span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToDemo}
            className="group relative px-12 py-6 bg-[#00ff88] text-black font-bold text-xl rounded-lg overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#00ff88]"
            />
            <span className="relative z-10 flex items-center gap-2">
              INICIAR SISTEMA T3
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-6 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-gray-500">LATÊNCIA &lt;16ms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ffaa00] animate-pulse" />
              <span className="text-gray-500">100% OFFLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ccff] animate-pulse" />
              <span className="text-gray-500">TEMPO REAL</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O <span className="text-[#ff4444]">VILÃO</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Você só descobre o prejuízo{' '}
              <span className="text-[#ff4444] font-bold">30 dias depois</span>.
              <br />
              Nós mudamos isso para{' '}
              <span className="text-[#00ff88] font-bold">30 milissegundos</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-b from-[#ff4444]/10 to-transparent border border-[#ff4444]/30 rounded-lg p-8 overflow-hidden"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <FileX2 className="w-16 h-16 text-[#ff4444]" />
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
              className="relative bg-gradient-to-b from-[#ff4444]/10 to-transparent border border-[#ff4444]/30 rounded-lg p-8 overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <AlertTriangle className="w-16 h-16 text-[#ff4444]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Papel = Dados Mortos</h3>
              <p className="text-gray-400">
                Apontamentos manuais são enterrados em pastas. Quando você precisa, já
                é tarde demais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-b from-[#ff4444]/10 to-transparent border border-[#ff4444]/30 rounded-lg p-8 overflow-hidden"
            >
              <div className="mb-6">
                <TrendingDown className="w-16 h-16 text-[#ff4444]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lucro Perdido</h3>
              <p className="text-gray-400">
                Cada minuto de máquina parada invisível é dinheiro que nunca volta.
              </p>

              <motion.div
                animate={{ scaleY: [0, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4444] to-transparent origin-bottom"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution/Demo Section */}
      <section id="demo" className="relative py-32 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O <span className="text-[#00ff88]">HERÓI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Do chão de fábrica à sala de reunião em tempo real
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00ff88]/10 border border-[#00ff88] flex items-center justify-center">
                    <span className="text-[#00ff88] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ff88]">
                      O Operador Aponta
                    </h3>
                    <p className="text-gray-400">Interface simples. Zero fricção.</p>
                  </div>
                </div>
                <Terminal />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00] flex items-center justify-center">
                    <span className="text-[#ffaa00] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#ffaa00]">
                      A Gestão Decide
                    </h3>
                    <p className="text-gray-400">Inteligência total. Poder completo.</p>
                  </div>
                </div>
                <Tower />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00ccff]/10 border border-[#00ccff] flex items-center justify-center">
                <span className="text-[#00ccff] font-bold">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#00ccff]">
                  O CFO Comemora
                </h3>
                <p className="text-gray-400">
                  Dados financeiros conectados ao chão de fábrica
                </p>
              </div>
            </div>
            <Dashboard />
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O <span className="text-[#00ccff]">SEGREDO</span>
            </h2>
            <p className="text-xl text-gray-400">Arquitetura de missão crítica</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-lg p-8 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-2xl group-hover:bg-[#00ff88]/10 transition-all" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <WifiOff className="w-12 h-12 text-[#00ff88]" />
                  <div className="text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full">
                    CORE
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">OFFLINE-FIRST</h3>
                <p className="text-gray-400 mb-4">
                  Sistema funciona sem internet. Zero dependência de nuvem. Dados locais,
                  decisões rápidas.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#00ff88]">
                  <Wifi className="w-4 h-4 line-through opacity-50" />
                  <span>Cabo cortado = Sistema verde</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-[#ffaa00]/10 to-transparent border border-[#ffaa00]/30 rounded-lg p-8 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffaa00]/5 rounded-full blur-2xl group-hover:bg-[#ffaa00]/10 transition-all" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <Zap className="w-12 h-12 text-[#ffaa00]" />
                  <div className="text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-3 py-1 rounded-full">
                    PERFORMANCE
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">LATÊNCIA ZERO</h3>
                <p className="text-gray-400 mb-4">
                  Resposta em menos de 16ms. Arquitetura edge-native. Dados processados
                  onde são gerados.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex-1 bg-[#ffaa00]/20 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '15%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#ffaa00]"
                    />
                  </div>
                  <span className="text-[#ffaa00] font-mono">&lt;16ms</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-[#00ccff]/10 to-transparent border border-[#00ccff]/30 rounded-lg p-8 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ccff]/5 rounded-full blur-2xl group-hover:bg-[#00ccff]/10 transition-all" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <Layers className="w-12 h-12 text-[#00ccff]" />
                  <div className="text-xs font-mono text-[#00ccff] bg-[#00ccff]/10 px-3 py-1 rounded-full">
                    FLEXÍVEL
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">HARDWARE AGNOSTIC</h3>
                <p className="text-gray-400 mb-4">
                  Roda em tablet velho, PC novo, Raspberry Pi. Você escolhe o hardware.
                  Nós entregamos a solução.
                </p>
                <div className="flex items-center gap-3 text-sm text-[#00ccff]">
                  <div className="w-2 h-2 rounded-full bg-[#00ccff]" />
                  <div className="w-2 h-2 rounded-full bg-[#00ccff]" />
                  <div className="w-2 h-2 rounded-full bg-[#00ccff]" />
                  <span className="text-gray-400">Qualquer dispositivo</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#00ff88]/10 via-[#ffaa00]/10 to-[#00ccff]/10 border border-[#00ff88]/30 rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-[#00ff88]" />
              <h3 className="text-2xl font-bold">Engenharia de Sistemas Críticos</h3>
            </div>
            <p className="text-gray-400">
              Mesma arquitetura usada em controle de tráfego aéreo, sistemas bancários e
              defesa militar. Agora aplicada ao chão de fábrica. Zero downtime. Zero
              compromissos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer/CTA Section */}
      <footer className="relative py-20 px-4 border-t border-[#00ff88]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Engenharia Militar aplicada à Indústria Civil.
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Você não está contratando um fornecedor. Você está contratando um
              arquiteto de sistemas críticos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#00ff88] text-black font-bold text-lg rounded-lg"
              >
                CONTRATAR O ARQUITETO
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#00ff88] text-[#00ff88] font-bold text-lg rounded-lg flex items-center justify-center gap-2"
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
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span>SISTEMA T3</span>
              </div>
              <span>|</span>
              <span>OPERATIONAL EXCELLENCE</span>
              <span>|</span>
              <span>2026</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
