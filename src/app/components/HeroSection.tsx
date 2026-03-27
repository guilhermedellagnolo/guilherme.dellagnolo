import { useLayoutEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMagneticHover } from "../hooks/useMagneticHover";
import { FadeInUp } from "./FadeInUp";

const heroTextContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const heroTextLine = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const primaryCtaRef = useMagneticHover();
  const secondaryCtaRef = useMagneticHover();
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const rafId = useRef(0);

  const handleHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (rafId.current) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    const target = event.currentTarget;
    rafId.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const offsetX = clientX - rect.left - rect.width / 2;
      const offsetY = clientY - rect.top - rect.height / 2;
      parallaxX.set(-offsetX * 0.02);
      parallaxY.set(-offsetY * 0.02);
      rafId.current = 0;
    });
  };

  const handleHeroMouseLeave = () => {
    parallaxX.set(0);
    parallaxY.set(0);
  };

  useLayoutEffect(() => {
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

      const ctas = heroRef.current?.querySelectorAll(".hero-cta") || [];

      ctas.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center+=100",
          end: "bottom center-=100",
          toggleClass: "breathing-cta",
        });
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
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
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
          <motion.div className="relative" style={{ x: parallaxX, y: parallaxY }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" />
                <div className="relative">
                  <div className="absolute -inset-0.5 border-2 border-blue-400 rounded-full" />
                  <img
                    src="/copia.webp"
                    alt="Guilherme - Arquiteto de Sistemas"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    decoding="async"
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain rounded-full border-4 border-white shadow-2xl bg-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center lg:text-left max-w-xl">
            <FadeInUp
              delay={1.2}
              className="hero-seq inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-200 rounded-full"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-blue-700 tracking-wider">
                [ DISPONIVEL PARA PROJETOS ]
              </span>
            </FadeInUp>

            <div className="mb-4">
              <motion.h1
                className="hero-seq text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight"
                variants={heroTextContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="overflow-hidden">
                  <motion.span variants={heroTextLine} className="block">
                    DESENVOLVEDOR
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={heroTextLine}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
                  >
                    DE SISTEMAS
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                className="hero-seq text-lg md:text-xl text-slate-600 leading-relaxed"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                Desenvolvendo sistemas resistentes que curam dores reais.
              </motion.p>
            </div>

            <FadeInUp delay={1.1}>
              <div className="hero-seq flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  ref={primaryCtaRef as React.RefObject<HTMLAnchorElement>}
                  href="#projetos"
                  className="hero-cta w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-semibold text-center border-2 border-blue-600 hover:border-blue-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  onTapStart={(event) => {
                    const target = event.target as HTMLElement;
                    target.classList.remove("breathing-cta");
                  }}
                >
                  VER PROJETOS
                </motion.a>
                <motion.a
                  ref={secondaryCtaRef as React.RefObject<HTMLAnchorElement>}
                  href="https://wa.me/5547996589483"
                  className="hero-cta w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-blue-400 rounded-lg shadow-lg font-semibold text-center transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  onTapStart={(event) => {
                    const target = event.target as HTMLElement;
                    target.classList.remove("breathing-cta");
                  }}
                >
                  ENTRE EM CONTATO
                </motion.a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center text-slate-500 z-20 pointer-events-none">
        <div className="w-6 h-6 flex items-center justify-center">
          <motion.svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M12 16.5L5.5 10l1.4-1.4L12 13.7l5.1-5.1L18.5 10 12 16.5z"
              fill="currentColor"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
