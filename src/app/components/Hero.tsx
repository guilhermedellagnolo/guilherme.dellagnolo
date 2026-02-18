import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import profileImage from '../../assets/365bee23282976e305041b7b4fec346a57c9a333.png';

interface HeroProps {}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => {
      setTimeout(() => setIsLoaded(true), 100);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 20,
    mass: 1,
  };

  return (
    <section id="hero" className="w-full max-w-6xl">
      <div className="grid lg:grid-cols-[2.6fr_2.2fr] gap-12 lg:gap-16 items-center">
        <motion.div 
          className="relative flex justify-center lg:justify-start order-1"
          initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
          animate={isLoaded ? { 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)"
          } : {}}
          transition={{
            ...springTransition,
            delay: 0.1,
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div
            ref={photoRef}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/40 blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            <div className="absolute inset-[6px] rounded-full border border-blue-300/70" />
            <img
              src={profileImage}
              alt="Retrato de Guilherme Dell'Agnolo"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-blue-200/80 shadow-[0_30px_90px_rgba(15,23,42,0.9)]"
              style={{ willChange: 'auto' }}
            />
          </motion.div>
        </motion.div>

        <div className="space-y-6 lg:space-y-8 order-2">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/80 bg-slate-900/70"
            initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
            animate={isLoaded ? { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            } : {}}
            transition={{
              ...springTransition,
              delay: 0.3,
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-slate-300 uppercase">
              Disponível para novos projetos
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={isLoaded ? { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)"
              } : {}}
              transition={{
                ...springTransition,
                delay: 0.4,
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="block text-slate-100">GUILHERME</span>
              <span className="block text-blue-400">DELL'AGNOLO</span>
            </motion.h1>
          </div>

          <motion.p
            className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            animate={isLoaded ? { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            } : {}}
            transition={{
              ...springTransition,
              delay: 0.5,
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            Transformo processos complexos em automação.Crio soluções digitais que eliminam o trabalho manual e garantem que o sistema trabalhe para o negócio, e não o contrário.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            animate={isLoaded ? { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            } : {}}
            transition={{
              ...springTransition,
              delay: 0.6,
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-slate-50 font-semibold text-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 18px 45px rgba(37, 99, 235, 0.45)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              Ver projetos
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-slate-50 transition-colors text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={springTransition}
            >
              Iniciar colaboração
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}