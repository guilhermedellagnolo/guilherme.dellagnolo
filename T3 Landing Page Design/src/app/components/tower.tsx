import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const mockData = [
  { value: 45 },
  { value: 52 },
  { value: 48 },
  { value: 61 },
  { value: 58 },
  { value: 70 },
  { value: 75 },
];

export function Tower() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#0a0a0a] border border-[#ffaa00]/20 rounded-lg p-6"
    >
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#ffaa00]/20">
        <div className="w-3 h-3 rounded-full bg-[#ffaa00] animate-pulse" />
        <span className="text-[#ffaa00] font-bold font-mono">TORRE DE CONTROLE</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/40 border border-[#00ff88] rounded p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">OEE ATUAL</span>
            <TrendingUp className="w-4 h-4 text-[#00ff88]" />
          </div>
          <div className="text-2xl font-bold text-[#00ff88]">78.4%</div>
          <div className="text-xs text-[#00ff88]/60 mt-1">↑ 12% vs. ontem</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/40 border border-[#ff4444] rounded p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">PARADAS</span>
            <AlertCircle className="w-4 h-4 text-[#ff4444]" />
          </div>
          <div className="text-2xl font-bold text-[#ff4444]">3</div>
          <div className="text-xs text-[#ff4444]/60 mt-1">↓ 40% vs. ontem</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/40 border border-[#ffaa00] rounded p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">PRODUÇÃO</span>
            <Activity className="w-4 h-4 text-[#ffaa00]" />
          </div>
          <div className="text-2xl font-bold text-[#ffaa00]">1,247</div>
          <div className="text-xs text-[#ffaa00]/60 mt-1">unidades/turno</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/40 border border-[#00ccff] rounded p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">EFICIÊNCIA</span>
            <TrendingUp className="w-4 h-4 text-[#00ccff]" />
          </div>
          <div className="text-2xl font-bold text-[#00ccff]">94.2%</div>
          <div className="text-xs text-[#00ccff]/60 mt-1">meta: 85%</div>
        </motion.div>
      </div>

      <div className="bg-black/40 border border-[#ffaa00]/30 rounded p-4">
        <div className="text-xs text-gray-400 mb-2">TENDÊNCIA PRODUTIVIDADE</div>
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={mockData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ffaa00"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-[#ffaa00]/20 text-xs text-[#ffaa00]/60 font-mono">
        ATUALIZADO: <span className="animate-pulse">TEMPO REAL</span>
      </div>
    </motion.div>
  );
}
