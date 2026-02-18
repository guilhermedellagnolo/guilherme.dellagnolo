import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function ParallaxBackground() {
  const topGradientRef = useRef<HTMLDivElement>(null);
  const bottomGradientRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mousePos.current = {
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2,
      };
    };

    const animate = () => {
      if (topGradientRef.current) {
        gsap.to(topGradientRef.current, {
          x: mousePos.current.x * 50,
          y: mousePos.current.y * 30,
          duration: 2,
          ease: 'power2.out',
        });
      }

      if (bottomGradientRef.current) {
        gsap.to(bottomGradientRef.current, {
          x: mousePos.current.x * -40,
          y: mousePos.current.y * -25,
          duration: 2.5,
          ease: 'power2.out',
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <div
        ref={topGradientRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px]"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={bottomGradientRef}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900/60 rounded-full blur-[100px]"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
