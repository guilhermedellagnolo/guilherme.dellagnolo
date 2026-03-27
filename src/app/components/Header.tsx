import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
  ];

  const handleContactScroll = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b-2 border-blue-100 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center border-2 border-blue-400">
                <span className="text-white font-black text-xl">G</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="font-black text-lg text-foreground leading-tight">
                Guilherme Dell&apos;agnolo
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                className="px-6 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleContactScroll();
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{
                scale: 0.98,
                transition: {
                  type: "tween",
                  duration: 0.2,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              className="ml-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-600 hover:border-blue-400"
            >
              Contato
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{
                    scale: 0.98,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleContactScroll();
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                className="mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 text-center border-2 border-blue-600 hover:border-blue-400"
              >
                Contato
              </motion.a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
