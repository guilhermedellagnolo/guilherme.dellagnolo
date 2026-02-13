import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Terminal, Command } from "lucide-react";

export function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const commands = [
    { cmd: "about", desc: "Sobre mim" },
    { cmd: "skills", desc: "Competências técnicas" },
    { cmd: "projects", desc: "Portfólio de projetos" },
    { cmd: "contact", desc: "Entrar em contato" },
  ];

  const filteredCommands = commands.filter((c) =>
    c.cmd.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setInput("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const element = document.getElementById(cmd);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setInput("");
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-white border-2 border-blue-200 hover:border-blue-400 rounded-xl shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 flex items-center gap-3 group backdrop-blur-sm"
      >
        <Terminal className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
        <span className="font-semibold text-slate-900">Command</span>
        <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-xs font-mono text-slate-600">
          ⌘K
        </kbd>
      </motion.button>

      {/* Command Palette */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50"
          />

          {/* Command Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl"
          >
            <div className="mx-4 bg-white border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg">
              {/* Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-100">
                <div className="flex items-center gap-3">
                  <Command className="w-5 h-5 text-blue-600" />
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite um comando..."
                    className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 font-mono"
                    autoFocus
                  />
                  <span className="text-xs text-slate-500 font-mono">ESC para fechar</span>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="p-2">
                    {filteredCommands.map((cmd, index) => (
                      <button
                        key={index}
                        onClick={() => handleCommand(cmd.cmd)}
                        className="w-full px-4 py-3 flex items-center gap-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                        <div className="flex-1 text-left">
                          <div className="font-mono text-sm text-blue-600 group-hover:text-blue-700">
                            /{cmd.cmd}
                          </div>
                          <div className="text-sm text-slate-600">{cmd.desc}</div>
                        </div>
                        <div className="text-xs text-slate-400 font-mono">Enter</div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500">
                    Nenhum comando encontrado
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Navegação rápida</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded">↑</kbd>
                      <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded">↓</kbd>
                      navegar
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded">↵</kbd>
                      selecionar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
