import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "CustomTkinter (Desktop)"]
    },
    {
      icon: Database,
      title: "Backend & AI",
      skills: ["Python (FastAPI)", "n8n (Workflow)", "PostgreSQL", "SQLite", "LLMs (OpenAI/Claude)"]
    }
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        if (!sectionRef.current) return;
        const section = sectionRef.current;

        const header = section.querySelector(".skills-header");

        if (header) {
          gsap.from(header, {
            opacity: 0,
            y: 40,
            ease: "power4.out",
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }

        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".skills-card")
        );

        if (cards.length) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 150,
              scale: 0.85,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "power4.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            }
          );
        }
      });

      mm.add("(max-width: 767px)", () => {
        if (!sectionRef.current) return;
        const section = sectionRef.current;

        const isLowEndDevice =
          typeof navigator !== "undefined" &&
          // @ts-expect-error deviceMemory might not exist em todos navegadores
          ((navigator.deviceMemory && navigator.deviceMemory <= 3) ||
            /Android\s(4|5|6|7|8)/i.test(navigator.userAgent || ""));

        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const liteMotion = isLowEndDevice || prefersReducedMotion;

        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".skills-card")
        );

        if (!cards.length) return;

        gsap.set(cards, {
          willChange: liteMotion
            ? "transform, opacity, border-color"
            : "transform, opacity, filter, border-color",
        });

        const fromVars: gsap.TweenVars = liteMotion
          ? {
              opacity: 0,
              y: 24,
              scale: 0.97,
              borderColor: "rgba(148,163,184,0.4)",
            }
          : {
              opacity: 0,
              y: 30,
              scale: 0.95,
              rotationX: 8,
              filter: "blur(8px)",
              transformPerspective: 900,
              borderColor: "rgba(148,163,184,0.4)",
            };

        const toVars: gsap.TweenVars = liteMotion
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              borderColor: "rgba(148,163,184,1)",
              ease: "expo.out",
              duration: 0.85,
              stagger: {
                amount: 0.28,
                from: "start",
              },
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
              },
              onComplete: () => {
                gsap.set(cards, { willChange: "" });
              },
            }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              filter: "blur(0px)",
              borderColor: "rgba(148,163,184,1)",
              ease: "expo.out",
              duration: 0.9,
              stagger: {
                amount: 0.3,
                from: "start",
              },
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
              },
              onComplete: () => {
                gsap.set(cards, { willChange: "" });
              },
            };

        gsap.fromTo(cards, fromVars, toVars);
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative md:-mt-24 z-30 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="skills-header max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-600 font-mono text-sm tracking-wider">02 // ARSENAL</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
            CONHECIMENTOS
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ferramentas que geram resultado e eficiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skills-card group relative"
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-white/80 backdrop-blur-md border-2 border-slate-200 group-hover:border-blue-400 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 border-2 border-blue-200 rounded-lg group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0F172A]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-sm text-slate-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-slate-50/80 to-blue-50/80 backdrop-blur-md border-2 border-blue-200 rounded-2xl p-8"
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 border-2 border-blue-300 rounded-lg">
                <Code2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0F172A] mb-2">Stack</h4>
                <p className="text-slate-700 leading-relaxed">
                    Minha stack não segue o &quot;hype&quot;, segue a missão. Priorizo ferramentas que garantem autonomia operacional, integridade de dados e velocidade de decisão. Se a ferramenta adiciona complexidade sem trazer lucro, ela é descartada.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
