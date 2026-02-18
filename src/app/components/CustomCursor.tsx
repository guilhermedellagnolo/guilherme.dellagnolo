import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isTouch = 
      typeof window !== 'undefined' && (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches
    );

    if (isTouch) return;

    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        gsap.to(trail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: 'power2.out',
          delay: index * 0.035,
        });
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      
      gsap.to(cursorDot, {
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(59, 130, 246, 0.8)',
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      gsap.to(trailRefs.current, { opacity: 0, scale: 0, duration: 0.2, overwrite: 'auto' });
    };

    const handleMouseLeave = () => {
      isHovering = false;

      gsap.to(cursorDot, {
        width: 10,
        height: 10,
        backgroundColor: '#3b82f6',
        borderWidth: 0,
        borderColor: 'transparent',
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      gsap.to(trailRefs.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1, overwrite: 'auto' });
    };

    const handleMouseDown = () => {
      const targetSize = isHovering ? 30 : 6;
      const targetBorder = isHovering ? 3 : 0;

      gsap.to(cursorDot, {
        width: targetSize,
        height: targetSize,
        borderWidth: targetBorder,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseUp = () => {
      const targetSize = isHovering ? 40 : 10;
      const targetBorder = isHovering ? 2 : 0;

      gsap.to(cursorDot, {
        width: targetSize,
        height: targetSize,
        borderWidth: targetBorder,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto'
      });
    };

    const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], [data-card], [data-lab-card], [data-about-card]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Rastro (Z-index alto, mas logo abaixo do ponto principal) */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          // ADICIONADO: z-[99998] garante que o rastro flutue acima do site
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998]"
          style={{
            transform: 'translate(-50%, -50%)',
            width: `${12 - i * 2}px`, 
            height: `${12 - i * 2}px`,
            backgroundColor: `rgba(59, 130, 246, ${0.3 - i * 0.05})`, 
            mixBlendMode: 'screen',
            willChange: 'transform, opacity',
          }}
        />
      ))}
      
      {/* Ponto Central (O Rei do Z-index) */}
      <div
        ref={cursorDotRef}
        // ADICIONADO: z-[99999] garante que o ponto principal fique acima de ABSOLUTAMENTE TUDO
        className="fixed top-0 left-0 rounded-full pointer-events-none box-border z-[99999]"
        style={{ 
          width: '10px',
          height: '10px',
          backgroundColor: '#3b82f6',
          borderWidth: '0px',
          borderColor: 'transparent',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)',
          willChange: 'transform, width, height, background-color, border-width, border-color',
        }}
      />
    </div>
  );
}