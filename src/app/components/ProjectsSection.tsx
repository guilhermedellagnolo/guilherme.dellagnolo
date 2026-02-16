import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T3ProjectCard } from "./T3ProjectCard";

type ProjectsSectionProps = {
  onOpenT3Project?: () => void;
};

export function ProjectsSection({ onOpenT3Project }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        if (!gridRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(
          gridRef.current.querySelectorAll(".bento-card")
        );

        if (!cards.length) return;

        gsap.set(cards, {
          opacity: 0,
          y: 150,
          scale: 0.85,
          willChange: "transform, opacity",
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
          onComplete: () => {
            gsap.set(cards, { willChange: "" });
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        if (!gridRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(
          gridRef.current.querySelectorAll(".bento-card")
        );

        if (!cards.length) return;

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            yPercent: 10,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });

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
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projetos" className="py-16 md:py-20 relative z-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-4 md:mb-10">
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
        </div>

        <div ref={gridRef} className="relative">
          <div className="bento-card">
            <T3ProjectCard onOpenProject={onOpenT3Project} />
          </div>
        </div>
      </div>
    </section>
  );
}
