import { X } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import type { GalleryImage } from "./T3DemoSection";

type T3ImageModalProps = {
  image: GalleryImage;
  onClose: () => void;
};

export function T3ImageModal({ image, onClose }: T3ImageModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem: ${image.label}`}
      className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center px-4"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Fechar imagem"
      >
        <X className="w-6 h-6" />
      </button>
      <div
        className="max-w-5xl w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 text-center text-xs font-mono tracking-[0.16em] text-gray-400">
          {image.label}
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-2">
          <ImageWithFallback
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] w-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
