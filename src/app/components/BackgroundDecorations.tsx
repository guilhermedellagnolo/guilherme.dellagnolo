import { motion } from "motion/react";

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Corner Technical Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="0" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="#2563EB" />
          <circle cx="40" cy="0" r="2" fill="#2563EB" />
          <circle cx="0" cy="40" r="2" fill="#2563EB" />
          <line x1="40" y1="0" x2="40" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="0" y1="40" x2="40" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="0" stroke="#2563EB" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="0" r="4" fill="#2563EB" />
          <circle cx="160" cy="0" r="2" fill="#2563EB" />
          <circle cx="200" cy="40" r="2" fill="#2563EB" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="200" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="0" cy="200" r="4" fill="#2563EB" />
          <circle cx="40" cy="200" r="2" fill="#2563EB" />
          <circle cx="0" cy="160" r="2" fill="#2563EB" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 right-0 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="200" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="200" r="4" fill="#2563EB" />
          <circle cx="160" cy="200" r="2" fill="#2563EB" />
          <circle cx="200" cy="160" r="2" fill="#2563EB" />
        </svg>
      </motion.div>

      {/* Floating Tech Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <circle cx="50" cy="50" r="3" fill="#2563EB" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-2/3 right-1/4 w-24 h-24"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </svg>
      </motion.div>

      {/* Data Stream Lines */}
      <motion.div
        className="absolute left-1/2 top-0 h-full w-px"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent" />
      </motion.div>
    </div>
  );
}
