import { useState } from "react";
import { motion } from "motion/react";
import { T3Hero } from "./T3Hero";
import { T3VillainSection } from "./T3VillainSection";
import { T3DemoSection } from "./T3DemoSection";
import { T3IntelSection } from "./T3IntelSection";
import { T3ArchSection } from "./T3ArchSection";
import { T3Footer } from "./T3Footer";
import { T3ImageModal } from "./T3ImageModal";
import type { GalleryImage } from "./T3DemoSection";

type T3ProjectPageProps = {
  onBackToPortfolio?: () => void;
};

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

      <T3Hero onScrollToDemo={scrollToDemo} />
      <T3VillainSection />
      <T3DemoSection onImageClick={setActiveImage} />
      <T3IntelSection />
      <T3ArchSection />
      <T3Footer onBackClick={handleBackClick} />

      {activeImage && (
        <T3ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </motion.div>
  );
}
