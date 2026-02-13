import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, User } from 'lucide-react';

interface Operation {
  id: string;
  operator: string;
  machine: string;
  status: 'running' | 'complete' | 'standby';
  time: string;
}

export function Terminal() {
  const [operations, setOperations] = useState<Operation[]>([
    { id: '001', operator: 'João Silva', machine: 'CNC-05', status: 'running', time: '14:32' },
    { id: '002', operator: 'Maria Santos', machine: 'TORNO-12', status: 'complete', time: '14:28' },
    { id: '003', operator: 'Carlos Souza', machine: 'PRENSA-08', status: 'standby', time: '14:25' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOperations(prev => prev.map(op => {
        if (op.status === 'running') {
          const [hours, minutes] = op.time.split(':').map(Number);
          const totalMinutes = hours * 60 + minutes + 1;
          const newHours = Math.floor(totalMinutes / 60) % 24;
          const newMinutes = totalMinutes % 60;
          return { ...op, time: `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}` };
        }
        return op;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    running: 'text-[#00ff88] border-[#00ff88]',
    complete: 'text-[#ffaa00] border-[#ffaa00]',
    standby: 'text-gray-500 border-gray-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0a0a0a] border border-[#00ff88]/20 rounded-lg p-6 font-mono"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00ff88]/20">
        <div className="w-3 h-3 rounded-full bg-[#00ff88] animate-pulse" />
        <span className="text-[#00ff88] font-bold">TERMINAL OPERACIONAL</span>
      </div>

      <div className="space-y-3">
        {operations.map((op, index) => (
          <motion.div
            key={op.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 border ${statusColors[op.status]} rounded bg-black/40`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{op.operator}</span>
              </div>
              <div className="flex items-center gap-2">
                {op.status === 'running' && <Clock className="w-4 h-4 animate-pulse" />}
                {op.status === 'complete' && <CheckCircle2 className="w-4 h-4" />}
                <span className="text-xs">{op.time}</span>
              </div>
            </div>
            <div className="text-xs opacity-70">
              MÁQUINA: <span className="font-bold">{op.machine}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[#00ff88]/20 text-xs text-[#00ff88]/60">
        <span className="animate-pulse">● SISTEMA ATIVO</span> | LATÊNCIA: &lt;16ms
      </div>
    </motion.div>
  );
}
