import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  // Remover viewport daqui
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  // Remover viewport daqui
};
