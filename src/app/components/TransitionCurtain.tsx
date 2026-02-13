import { AnimatePresence, motion } from "motion/react";

type TransitionCurtainProps = {
  isActive: boolean;
};

export function TransitionCurtain({ isActive }: TransitionCurtainProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
