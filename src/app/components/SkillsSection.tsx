import { motion } from "motion/react";
import { Code2, Database } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "CustomTkinter (Desktop)"]
    },
    {
      icon: Database,
      title: "Backend & AI",
      skills: ["Python (FastAPI)", "n8n (Workflow)", "PostgreSQL", "SQLite", "LLMs (OpenAI/Claude)"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-600 font-mono text-sm tracking-wider">02 // ARSENAL</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
            CONHECIMENTOS
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ferramentas que geram resultado e eficiencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-white border-2 border-slate-200 group-hover:border-blue-400 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 border-2 border-blue-200 rounded-lg group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0F172A]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.3, once: false }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-sm text-slate-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 border-2 border-blue-300 rounded-lg">
                <Code2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0F172A] mb-2">Stack</h4>
                <p className="text-slate-700 leading-relaxed">
                    Minha stack não segue o &quot;hype&quot;, segue a missão. Priorizo ferramentas que garantem autonomia operacional, integridade de dados e velocidade de decisão. Se a ferramenta adiciona complexidade sem trazer lucro, ela é descartada.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
