import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from './MagneticButton';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-slate-800/70 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center gap-3 group"
            data-magnetic
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 border border-blue-300/70">
                <span className="text-slate-50 font-black text-xl tracking-tight">G</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-mono text-slate-400 tracking-[0.2em] uppercase">
                SYSTEM ARCHITECT
              </span>
              <span className="text-sm font-medium text-slate-100 group-hover:text-slate-50 transition-colors">
                Guilherme Dell'Agnolo
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="px-4 py-2 rounded-lg hover:bg-slate-800/80 hover:text-slate-50 transition-colors"
              data-magnetic
            >
              Início
            </a>
            <a
              href="#works"
              onClick={(e) => handleClick(e, '#works')}
              className="px-4 py-2 rounded-lg hover:bg-slate-800/80 hover:text-slate-50 transition-colors"
              data-magnetic
            >
              Evidence Layer
            </a>
            <a
              href="#lab"
              onClick={(e) => handleClick(e, '#lab')}
              className="px-4 py-2 rounded-lg hover:bg-slate-800/80 hover:text-slate-50 transition-colors"
              data-magnetic
            >
              Lab
            </a>
            <a
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
              className="px-4 py-2 rounded-lg hover:bg-slate-800/80 hover:text-slate-50 transition-colors"
              data-magnetic
            >
              Sobre
            </a>
            <MagneticButton
              href="#contact"
              onClick={(e) => handleClick(e as any, '#contact')}
              className="ml-3 px-4 py-2 rounded-lg bg-blue-600 text-slate-50 hover:bg-blue-500 inline-block"
            >
              Iniciar colaboração
            </MagneticButton>
          </nav>

          <MagneticButton
            href="#contact"
            onClick={(e) => handleClick(e as any, '#contact')}
            className="inline-flex md:hidden items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-semibold tracking-wide text-slate-50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para projetos
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}