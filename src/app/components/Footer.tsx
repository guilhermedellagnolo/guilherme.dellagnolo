import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5547996589483",
      color: "hover:text-emerald-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:guilherme.delagnolo@gmail.com",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guilhermedellagnolo/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/guilhermedellagnolo",
      color: "hover:text-slate-900",
    },
  ];

  return (
    <footer id="contato" className="relative mt-24">
      <div className="sticky bottom-0 z-[-1]">
        <div className="relative py-20 border-t-2 border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto">
              <div className="lg:col-span-1">
                <div>
                  <div className="overflow-hidden">
                    <h3 className="text-2xl font-black text-foreground mb-4">
                      GUILHERME
                      <span className="block text-blue-600">ARQUITETO DE SISTEMAS</span>
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Arquitetura de sistemas industriais, automações e interfaces de alta densidade.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm font-mono text-blue-700 tracking-wider">
                      INICIAR COLABORAÇÃO
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-6">Navegação</h4>
                  <nav className="space-y-3">
                    {["sobre", "skills", "projetos"].map((link) => (
                      <a
                        key={link}
                        href={`#${link}`}
                        className="block text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                        <span className="capitalize">{link}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              <div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-6">Conectar</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-lg transition-all duration-300 hover:scale-[1.02] ${social.color} group`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-slate-600 group-hover:text-current transition-colors" />
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      Disponível para projetos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span>© 2026 GUILHERME DELL'AGNOLO // T3 SOFTWARE</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs">
                  <span className="text-blue-600">Joinville, SC, Brasil</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full" />
                  <span className="text-slate-600">Operando em modo Offline-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
