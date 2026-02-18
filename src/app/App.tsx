import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { LabSection } from './components/LabSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { ParallaxBackground } from './components/ParallaxBackground';
import { GrainOverlay } from './components/GrainOverlay';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { FPSCounter } from './components/FPSCounter';

export default function App() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (!isTouchDevice) {
      const style = document.createElement('style');
      style.innerHTML = `
        @media (hover: hover) and (pointer: fine) {
          body, body * {
            cursor: none !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        style.remove();
      };
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <FPSCounter />
      <SmoothScroll>
        <div className="min-h-screen bg-[#050505] text-slate-100 overflow-x-hidden">
          <CustomCursor />
          <ParticleBackground />
          <ParallaxBackground />
          <GrainOverlay />

          <div className="relative z-10">
            <Header />
            
            <div className="min-h-screen flex items-center justify-center px-4 lg:px-6">
              <Hero />
            </div>

            <main className="max-w-6xl mx-auto px-4 lg:px-6 pb-20 space-y-32 lg:space-y-40">
              <WorksSection />
              <LabSection />
              <AboutSection />
              <ContactSection />
            </main>
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}