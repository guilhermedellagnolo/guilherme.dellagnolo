import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '/guilhermedellagnolo',
    href: 'https://wa.me/5547997455202',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'guilherme.delagnolo@gmail.com',
    href: 'mailto:guilherme.delagnolo@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '@guilhermedellagnolo',
    href: 'https://www.linkedin.com/in/guilhermedellagnolo/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/guilhermedellagnolo',
    href: 'https://github.com/guilhermedellagnolo',
  },
];

const availability = [
  'Novos Projetos & MVPs.',
  'Automação de Processos.',
  'Parcerias de Longo Prazo.',
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 to-slate-950/60 px-6 py-10 md:px-10 md:py-12 scroll-mt-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* LADO ESQUERDO: Visão e Contexto (Agora mais robusto) */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <p className="text-xs font-mono tracking-[0.2em] text-blue-400 uppercase">
              Vamos construir juntos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 leading-tight">
              Tem um desafio técnico ou uma ideia ambiciosa?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-lg">
              Não sou agência, sou parceiro. Se você precisa de arquitetura sólida e execução técnica para tirar seu projeto do papel, vamos conversar. Meu foco é transformar ideias em sistemas que realmente funcionam, com código limpo e escalável. 
            </p>
          </div>

          {/* Movi a disponibilidade para cá para encher a esquerda */}
          <div className="space-y-4 border-t border-slate-800/60 pt-6">
            <p className="text-xs font-mono tracking-[0.1em] text-slate-500 uppercase">
              Disponível para
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              {availability.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 pt-2">
              Joinville, SC · Status: <span className="text-emerald-400">Operando</span>
            </p>
          </div>
        </motion.div>

        {/* LADO DIREITO: Ação Pura (Apenas os botões) */}
        <motion.div
          className="w-full space-y-4 lg:pt-2"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <p className="text-xs font-mono tracking-[0.1em] text-slate-500 uppercase mb-4 hidden lg:block">
              Canais Diretos
            </p>
          <div className="grid gap-3">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <MagneticButton
                  key={contact.label}
                  href={contact.href}
                  strength={0.2}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-slate-100">{contact.label}</span>
                    <span className="text-xs text-slate-500 group-hover:text-blue-300 transition-colors">
                      {contact.value}
                    </span>
                  </div>
                </MagneticButton>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}