import { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMagneticHover } from "../hooks/useMagneticHover";

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const primaryCtaRef = useMagneticHover();
  const secondaryCtaRef = useMagneticHover();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        if (!heroRef.current || !contentRef.current) return;

        gsap.fromTo(
          contentRef.current,
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
          },
          {
            yPercent: 40,
            scale: 0.9,
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        if (!heroRef.current) return;
        const section = heroRef.current;

        const items = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".hero-seq")
        );

        if (!items.length) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
          }
        );
      });
    }, heroRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center py-10 sm:py-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" />
                <div className="relative">
                  <div className="absolute -inset-0.5 border-2 border-blue-400 rounded-full" />
                  <img
                    src="/copia.png"
                    alt="Guilherme - Arquiteto de Sistemas"
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <div className="hero-seq inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-blue-700 tracking-wider">
                [ DISPONIVEL PARA PROJETOS ] 
              </span>
            </div>

            <h1 className="hero-seq text-4xl md:text-5xl lg:text-7xl font-black text-[#0F172A] mb-4 tracking-tight">
              DESENVOLVEDOR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                DE SISTEMAS
              </span>
            </h1>

            <p className="hero-seq text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Desenvolvendo sistemas resistentes que curam dores reais.
            </p>

            <div className="hero-seq flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                ref={primaryCtaRef as React.RefObject<HTMLAnchorElement>}
                href="#projetos"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-semibold text-center"
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                VER PROJETOS
              </motion.a>
              <motion.a
                ref={secondaryCtaRef as React.RefObject<HTMLAnchorElement>}
                href="https://wa.me/5547996589483"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-lg shadow-lg font-semibold text-center"
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                ENTRE EM CONTATO
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center text-slate-500 z-20 pointer-events-none">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg
            className="w-4 h-4 animate-bounce"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 16.5L5.5 10l1.4-1.4L12 13.7l5.1-5.1L18.5 10 12 16.5z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
