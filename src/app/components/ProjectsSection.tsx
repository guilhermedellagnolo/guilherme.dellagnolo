import { motion } from "motion/react";
import { T3ProjectCard } from "./T3ProjectCard";

type ProjectsSectionProps = {
  onOpenT3Project?: () => void;
};

export function ProjectsSection({ onOpenT3Project }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-600 font-mono text-sm tracking-wider">
              03 // PORTFÓLIO
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
            PROJETOS &amp; SOLUÇÕES.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tecnologia aplicada para gerar resultado.
          </p>
        </motion.div>

        <T3ProjectCard onOpenProject={onOpenT3Project} />
      </div>
    </section>
  );
}
