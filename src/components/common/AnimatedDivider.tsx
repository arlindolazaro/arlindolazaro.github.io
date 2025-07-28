import { motion } from 'framer-motion';

export const AnimatedDivider = () => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: '96px' }}
    transition={{ duration: 0.8 }}
    className="h-1 bg-indigo-500 mx-auto my-6 rounded-full"
  />
);