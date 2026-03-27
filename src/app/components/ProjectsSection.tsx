import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T3ProjectCard } from "./T3ProjectCard";
import { FadeInUp } from "./FadeInUp";

type ProjectsSectionProps = {
  onOpenT3Project?: () => void;
};

export function ProjectsSection({ onOpenT3Project }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const ctas = sectionRef.current?.querySelectorAll(".t3-cta") || [];

      ctas.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center+=100",
          end: "bottom center-=100",
          toggleClass: "breathing-cta",
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projetos" className="py-16 md:py-20 relative z-10 bg-white">
      <div className="container mx-auto px-4">
        <FadeInUp className="max-w-4xl mb-4 md:mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-600 font-mono text-sm tracking-wider">
              03 // PORTFÓLIO
            </span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl lg:text-5xl font-black text-foreground mb-6"
            >
              PROJETOS &amp; SOLUÇÕES.
            </motion.h2>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tecnologia aplicada para gerar resultado.
          </p>
        </FadeInUp>

        <div className="relative">
          <FadeInUp delay={0.2}>
            <div className="bento-card">
              <T3ProjectCard onOpenProject={onOpenT3Project} />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
