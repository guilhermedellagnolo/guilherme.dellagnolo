import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { BackgroundDecorations } from "./components/BackgroundDecorations";
import { TransitionCurtain } from "./components/TransitionCurtain";
import T3ProjectPage from "./projects/t3/page";
import Lenis from "@studio-freight/lenis";

type Page = "home" | "t3";

function getPageFromPath(pathname: string): Page {
  if (pathname.startsWith("/projects/t3")) {
    return "t3";
  }
  return "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    if (typeof window !== "undefined") {
      return getPageFromPath(window.location.pathname);
    }
    return "home";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState<Page | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.09,
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (target: Page) => {
    if (target === page) return;

    const pathname = target === "t3" ? "/projects/t3" : "/";
    window.history.pushState({}, "", pathname);

    setIsTransitioning(true);
    setNextPage(target);
  };

  useEffect(() => {
    if (!isTransitioning || !nextPage) return;

    const switchTimeout = window.setTimeout(() => {
      setPage(nextPage);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 200);

    const endTimeout = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 550);

    return () => {
      window.clearTimeout(switchTimeout);
      window.clearTimeout(endTimeout);
    };
  }, [isTransitioning, nextPage]);

  return (
    <div className="min-h-screen relative">
      {page === "home" && <BackgroundDecorations />}
      <div className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Header />
              <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection onOpenT3Project={() => navigateTo("t3")} />
              </main>
              <Footer />
            </motion.div>
          )}

          {page === "t3" && (
            <motion.div
              key="t3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="relative"
            >
              <T3ProjectPage onBackToPortfolio={() => navigateTo("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <TransitionCurtain isActive={isTransitioning} />
    </div>
  );
}
