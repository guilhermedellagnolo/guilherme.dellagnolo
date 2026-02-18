import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  // Mantemos apenas as referências do ponto central e do rastro
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. A TRAVA MOBILE (Mantida por segurança)
    const isTouch = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) return;

    // 2. O MOTOR
    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      // O ponto central segue o mouse INSTANTANEAMENTE (sem lag)
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0, // Zero atraso
      });

      // O rastro segue com um pequeno atraso e suavidade
      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        // Aumentei um pouco o delay base para o rastro ficar mais visível e fluido
        const delay = index * 0.035; 
        gsap.to(trail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4, // Duração um pouco maior para um rastro mais longo
          ease: 'power2.out',
          delay: delay,
        });
      });
    };

    // Efeito simples ao passar o mouse em links: o pontinho diminui ligeiramente
    const handleMouseEnter = () => {
      gsap.to(cursorDot, {
        scale: 0.7, // Fica um pouco menor para indicar precisão
        backgroundColor: '#60a5fa', // Um azul ligeiramente mais claro (blue-400)
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorDot, {
        scale: 1,
        backgroundColor: '#3b82f6', // Volta ao azul original (blue-500)
        duration: 0.2,
      });
    };

    // Aplica os eventos aos elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], [data-card], [data-lab-card], [data-about-card]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    // A TRAVA CSS (Mantida para esconder em celulares)
    <div className="hidden md:block pointer-events-none z-[9999]">
      {/* O Rastro Fluido */}
      {[...Array(5)].map((_, i) => ( // Aumentei para 5 elementos no rastro para ficar mais bonito
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%)',
            // O rastro começa maior e vai diminuindo
            width: `${12 - i * 2}px`, 
            height: `${12 - i * 2}px`,
            // O rastro começa mais transparente e desaparece
            backgroundColor: `rgba(59, 130, 246, ${0.3 - i * 0.05})`, 
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
      ))}
      
      {/* O Ponto Central (Agora é o protagonista) */}
      <div
        ref={cursorDotRef}
        // Mudei para bg-blue-500 para ser um ponto azul sólido e nítido
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none transition-colors"
        style={{ 
          transform: 'translate(-50%, -50%)',
          // Removi o mixBlendMode difference para ele ser um ponto azul de luz puro
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)', // Adicionei um pequeno brilho (glow)
          willChange: 'transform',
        }}
      />
    </div>
  );
}