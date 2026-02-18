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
import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { FPSCounter } from './components/FPSCounter';

export default function App() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add cursor: none to all interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = 'auto';
      style.remove();
    };
  }, []);

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <FPSCounter />
      <SmoothScroll>
        <div className="min-h-screen bg-[#050505] text-slate-100 overflow-x-hidden">
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Parallax Background Gradients */}
          <ParallaxBackground />
          
          {/* Grain Overlay */}
          <GrainOverlay />

          {/* Content */}
          <div className="relative z-10">
            <Header />
            
            <main className="max-w-6xl mx-auto px-4 lg:px-6 pt-10 pb-20 space-y-32 lg:space-y-40">
              <Hero />
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