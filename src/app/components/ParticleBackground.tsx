import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  gridX: number;
  gridY: number;
}

interface SpatialGrid {
  [key: string]: Particle[];
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const spatialGridRef = useRef<SpatialGrid>({});
  const cellSizeRef = useRef(100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true
    });
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      spatialGridRef.current = {};
      
      const spacing = 80;
      const cols = Math.ceil(window.innerWidth / spacing);
      const rows = Math.ceil(window.innerHeight / spacing);
      cellSizeRef.current = spacing;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const particle: Particle = {
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            gridX: Math.floor(x / cellSizeRef.current),
            gridY: Math.floor(y / cellSizeRef.current),
          };
          particlesRef.current.push(particle);
          addToGrid(particle);
        }
      }
    };

    const addToGrid = (particle: Particle) => {
      const key = `${particle.gridX},${particle.gridY}`;
      if (!spatialGridRef.current[key]) {
        spatialGridRef.current[key] = [];
      }
      spatialGridRef.current[key].push(particle);
    };

    const getNearbyParticles = (particle: Particle): Particle[] => {
      const nearby: Particle[] = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${particle.gridX + dx},${particle.gridY + dy}`;
          if (spatialGridRef.current[key]) {
            nearby.push(...spatialGridRef.current[key]);
          }
        }
      }
      return nearby;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    let lastTime = performance.now();
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < frameTime) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime - (deltaTime % frameTime);

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particlesRef.current.forEach((particle) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = ((maxDistance - distance) / maxDistance) * 0.5;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.2;
          particle.vy += Math.sin(angle) * force * 0.2;
        }

        const springX = (particle.baseX - particle.x) * 0.03;
        const springY = (particle.baseY - particle.y) * 0.03;
        particle.vx += springX;
        particle.vy += springY;

        particle.vx *= 0.92;
        particle.vy *= 0.92;

        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.25)';
        ctx.fill();
      });

      particlesRef.current.forEach((particle) => {
        const nearby = getNearbyParticles(particle);
        
        nearby.forEach((otherParticle) => {
          if (particle === otherParticle) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - dist / 100) * 0.1;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'screen',
        willChange: 'transform'
      }}
    />
  );
}
