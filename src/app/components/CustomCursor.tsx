import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Dot follows immediately
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Animate trail dots
      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        const delay = index * 0.02;
        gsap.to(trail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3 + delay,
          ease: 'power2.out',
        });
      });
    };

    // Smooth cursor follow
    const updateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      gsap.set(cursor, {
        x: cursorPos.current.x,
        y: cursorPos.current.y,
      });

      requestAnimationFrame(updateCursor);
    };

    // Hover effects on interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Larger scale for magnetic elements
      const isMagnetic = target.hasAttribute('data-magnetic');
      gsap.to(cursor, {
        scale: isMagnetic ? 2 : 1.5,
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 0.8)',
        duration: 0.3,
        ease: 'power2.out',
      });
      
      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        borderColor: 'rgba(37, 99, 235, 0.4)',
        duration: 0.3,
        ease: 'power2.out',
      });
      
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], [data-card], [data-lab-card]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    updateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
          style={{
            transform: 'translate(-50%, -50%)',
            width: `${8 - i * 2}px`,
            height: `${8 - i * 2}px`,
            backgroundColor: `rgba(37, 99, 235, ${0.15 - i * 0.05})`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
      
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500/40 rounded-full pointer-events-none z-[9999] transition-all"
        style={{
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(37, 99, 235, 0.05)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999]"
        style={{ 
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}