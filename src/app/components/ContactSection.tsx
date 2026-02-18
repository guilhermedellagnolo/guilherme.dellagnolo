import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '/guilhermedellagnolo',
    href: 'https://wa.me/5547996589483',
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
  'Arquitetura de sistemas industriais.',
  'Automações com foco em operação real.',
  'Interfaces de alta densidade de informação.',
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="space-y-10 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 to-slate-950/60 px-5 sm:px-8 py-10 lg:py-12 scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Intro */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.2em] text-blue-300 uppercase">
            Digital Handshake
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-50 leading-tight">
            Pronto para eliminar cegueira operacional da sua operação industrial?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Se você lidera uma indústria ou responde por operação, arquitetura de sistemas e
            automação não podem ser caixinhas isoladas. Vamos desenhar juntos uma camada de
            sistemas que protege seu resultado em tempo real.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="w-full max-w-md space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-[0.18em] text-slate-400 uppercase">
              Canais principais
            </p>
            <div className="space-y-2">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <MagneticButton
                    key={contact.label}
                    href={contact.href}
                    strength={0.3}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/60 hover:bg-slate-900 text-slate-100 transition-colors group w-full"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-4 h-4 text-blue-400" />
                      </motion.div>
                      <span className="text-sm font-medium">{contact.label}</span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                      {contact.value}
                    </span>
                  </MagneticButton>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <motion.div
            className="space-y-2 text-xs text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p>Disponível para projetos de:</p>
            <ul className="space-y-1 text-slate-200">
              {availability.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-400 mt-0.5">·</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="pt-2 text-slate-400">
              Joinville, SC, Brasil · Status: operando em modo offline-first.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}