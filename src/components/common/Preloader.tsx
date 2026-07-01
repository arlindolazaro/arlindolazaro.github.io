import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ exiting?: boolean }> = ({ exiting = false }) => (
  <motion.div
    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
    animate={{ opacity: exiting ? 0 : 1 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="relative"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-16 h-16 rounded-2xl bg-[var(--lime)] flex items-center justify-center">
        <span className="text-black font-black text-xl">AC</span>
      </div>
      <motion.div
        className="absolute -inset-2 rounded-3xl border border-[var(--lime)]/30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.div>
    <motion.p
      className="mt-6 text-[var(--muted)] text-xs tracking-[0.3em] uppercase"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
    >
      Arlindo Cau
    </motion.p>
  </motion.div>
);

export default Preloader;