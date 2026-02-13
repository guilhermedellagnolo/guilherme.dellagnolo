import { motion } from 'motion/react';
import { BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, Zap } from 'lucide-react';

const barData = [
  { name: 'Seg', value: 85 },
  { name: 'Ter', value: 92 },
  { name: 'Qua', value: 78 },
  { name: 'Qui', value: 95 },
  { name: 'Sex', value: 88 },
];

const pieData = [
  { name: 'Produtivo', value: 75, color: '#00ff88' },
  { name: 'Setup', value: 15, color: '#ffaa00' },
  { name: 'Parado', value: 10, color: '#ff4444' },
];

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-[#0a0a0a] border border-[#00ccff]/20 rounded-lg p-6"
    >
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#00ccff]/20">
        <div className="w-3 h-3 rounded-full bg-[#00ccff] animate-pulse" />
        <span className="text-[#00ccff] font-bold font-mono">DASHBOARD EXECUTIVO</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-[#00ff88]" />
            <span className="text-xs text-gray-400">RECEITA HOJE</span>
          </div>
          <div className="text-xl font-bold text-[#00ff88]">R$ 124K</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#ffaa00]/10 to-transparent border border-[#ffaa00]/30 rounded p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#ffaa00]" />
            <span className="text-xs text-gray-400">MARGEM</span>
          </div>
          <div className="text-xl font-bold text-[#ffaa00]">32.8%</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#00ccff]/10 to-transparent border border-[#00ccff]/30 rounded p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#00ccff]" />
            <span className="text-xs text-gray-400">VELOCIDADE</span>
          </div>
          <div className="text-xl font-bold text-[#00ccff]">+18%</div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/40 border border-[#00ff88]/20 rounded p-4">
          <div className="text-xs text-gray-400 mb-3">PRODUÇÃO SEMANAL</div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={barData}>
              <Bar dataKey="value" fill="#00ff88" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-black/40 border border-[#ffaa00]/20 rounded p-4">
          <div className="text-xs text-gray-400 mb-3">UTILIZAÇÃO MÁQUINAS</div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-[#00ccff]/20 flex items-center justify-between">
        <span className="text-xs text-[#00ccff]/60 font-mono">
          DADOS FINANCEIROS EM TEMPO REAL
        </span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-xs text-[#00ff88]">SINCRONIZADO</span>
        </div>
      </div>
    </motion.div>
  );
}
