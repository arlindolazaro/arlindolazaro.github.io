import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </motion.h2>
);