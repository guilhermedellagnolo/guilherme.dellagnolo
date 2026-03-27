import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/fotos/Apontamento.png", alt: "Tela de apontamento de produção no sistema T3", label: "APONTAMENTO" },
  { src: "/fotos/Torre de controle.png", alt: "Tela da torre de controle central do sistema T3", label: "TORRE DE CONTROLE" },
  { src: "/fotos/Area de cadastro.png", alt: "Tela de área de cadastro de entidades do sistema T3", label: "ÁREA DE CADASTRO" },
  { src: "/fotos/Historico.png", alt: "Tela de histórico de registros e eventos do sistema T3", label: "HISTÓRICO" },
  { src: "/fotos/Visão geral.png", alt: "Visão geral consolidada das máquinas e ordens de serviço", label: "VISÃO GERAL" },
  { src: "/fotos/Contribuição por maquina.png", alt: "Contribuição financeira por máquina", label: "CONTRIBUIÇÃO POR MÁQUINA" },
  { src: "/fotos/Resultados diários.png", alt: "Resultados diários consolidados do turno", label: "RESULTADOS DIÁRIOS" },
  { src: "/fotos/Contribuição por O.S.png", alt: "Contribuição financeira por ordem de serviço", label: "CONTRIBUIÇÃO POR O.S" },
  { src: "/fotos/Resultados da O.S.png", alt: "Resultados detalhados por ordem de serviço", label: "RESULTADOS DA O.S" },
  { src: "/fotos/Resultado dos operadores.png", alt: "Resultado individual por operador", label: "RESULTADO DOS OPERADORES" },
];

export { type GalleryImage, galleryImages };

type T3DemoSectionProps = {
  onImageClick: (image: GalleryImage) => void;
};

export function T3DemoSection({ onImageClick }: T3DemoSectionProps) {
  return (
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
                preload="none"
                poster="/fotos/Apontamento.png"
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
                  onClick={() => onImageClick(image)}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 cursor-pointer text-left transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:-translate-y-1"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
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
  );
}
