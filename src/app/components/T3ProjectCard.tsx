import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type T3ProjectCardProps = {
  onOpenProject?: () => void;
};

export function T3ProjectCard({ onOpenProject }: T3ProjectCardProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onOpenProject) return;
    event.preventDefault();
    onOpenProject();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm font-mono tracking-wider">
                  PROJETOS VALIDADOS
                </span>
              </div>
              <h3 className="text-4xl font-black mb-3">T3 SOFTWARE</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Sistema de apontamento em tempo real (100% Offline).
              </p>
            </div>
            <motion.a
              href="/projects/t3"
              onClick={handleClick}
              className="hidden md:inline-flex px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg transition-all duration-300 items-center gap-2 font-semibold"
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <ExternalLink className="w-5 h-5" />
              EXPLORAR SISTEMA T3
            </motion.a>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded-full" />
              Missão
            </h4>
            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-6">
              Eliminar a "Cegueira Operacional" no Chão de Fábrica.
              No polo metalmecânico, tempo é a moeda mais cara. Identifiquei que
              ERPs tradicionais falham na captura real do custo-minuto, gerando
              "lucro fantasma".
              A missão do T3 foi clara: criar um sistema descentralizado que
              transforme o apontamento do operador em oportunidade de tomada de
              decisão. Não é apenas sobre coletar dados; é sobre garantir a
              saúde financeira da indústria em tempo real, eliminando planilhas
              e "achismos"
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
                <h5 className="text-lg font-bold text-[#0F172A] mb-4">
                  Stack Tecnológico
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-mono text-sm mt-1">
                      ▸
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-[#0F172A]">
                        Core & Backend
                      </div>
                      <div className="text-sm text-slate-600">
                        Python , FastAPI, Pandas , SQLite.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-mono text-sm mt-1">
                      ▸
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-[#0F172A]">
                        Interface
                      </div>
                      <div className="text-sm text-slate-600">
                        CustomTkinter & Webview.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-mono text-sm mt-1">
                      ▸
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-[#0F172A]">
                        Infraestrutura
                      </div>
                      <div className="text-sm text-slate-600">
                        Sockets TCP/IP (LAN), PyArmor (Obfuscação), Nuitka
                        (Compilação).
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
                <h5 className="text-lg font-bold text-[#0F172A] mb-4">
                  Resultados Obtidos
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-mono text-sm mt-1">
                      ✓
                    </span>
                    <div className="font-semibold text-sm text-[#0F172A]">
                      100% UPTIME // Operação blindada. A fábrica continua
                      produzindo mesmo com falha total de rede.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-mono text-sm mt-1">
                      ✓
                    </span>
                    <div className="font-semibold text-sm text-[#0F172A]">
                      ZERO DATA LOSS // Integridade absoluta. O buffer local
                      (Edge DB) garante que nenhum apontamento se perca.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-mono text-sm mt-1">
                      ✓
                    </span>
                    <div className="font-semibold text-sm text-[#0F172A]">
                      HARDWARE AGNOSTIC // Alta performance mesmo em PCs
                      antigos, eliminando custos com infraestrutura nova.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <h5 className="text-xl font-bold text-[#0F172A] mb-4">
                Decisões
              </h5>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-blue-700">
                    Offline-First não é feature, é fundação:
                  </span>{" "}
                  Em ambientes industriais, a conectividade é imprevisível. O
                  T3 foi arquitetado desde o início para operar completamente
                  offline, com sincronização inteligente e resolução automática
                  de conflitos.
                </p>
                <p>
                  <span className="font-semibold text-blue-700">
                    Interface de baixa fricção:
                  </span>{" "}
                  Trabalhadores em chão de fábrica não têm tempo para UIs
                  complexas. Cada interação foi otimizada para ser completada em
                  menos de 4 cliques.
                </p>
                <p>
                  <span className="font-semibold text-blue-700">
                    Arquitetura resiliente:
                  </span>{" "}
                  Falhas de rede, quedas de energia - o sistema foi testado nos
                  cenários mais adversos possíveis.
                  A confiabilidade não é opcional quando cada minuto parado
                  custa dinheiro.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="/projects/t3"
              onClick={handleClick}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center gap-2"
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <ExternalLink className="w-5 h-5" />
              EXPLORAR SISTEMA T3
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
