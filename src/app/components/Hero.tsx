import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import profileImage from 'figma:asset/365bee23282976e305041b7b4fec346a57c9a333.png';

interface HeroProps {
  // Remove prop since we'll use the imported image
}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 30,
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-12">
      <div className="grid lg:grid-cols-[2.6fr_2.2fr] gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div 
          className="relative flex justify-center lg:justify-start order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            ref={photoRef}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/40 blur-3xl"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-[6px] rounded-full border border-blue-300/70" />
            <img
              src={profileImage}
              alt="Retrato de Guilherme Dell'Agnolo"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-blue-200/80 shadow-[0_30px_90px_rgba(15,23,42,0.9)]"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6 lg:space-y-8 order-2">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/80 bg-slate-900/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-slate-300 uppercase">
              Hey, eu sou Guilherme
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="block text-slate-100">GUILHERME</span>
              <span className="block text-blue-400">DELL'AGNOLO</span>
            </motion.h1>
          </div>

          <motion.p
            className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            System Architect focado em indústria, automações e interfaces táticas que protegem o
            resultado financeiro da operação.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-slate-50 font-semibold text-sm"
              whileHover={{ y: -2, boxShadow: '0 18px 45px rgba(37, 99, 235, 0.45)' }}
              whileTap={{ scale: 0.98 }}
            >
              Ver trabalhos
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-slate-50 transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar colaboração
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}