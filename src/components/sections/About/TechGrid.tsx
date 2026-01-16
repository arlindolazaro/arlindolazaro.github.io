// TechGrid.tsx
import { motion } from 'framer-motion';
import type { Technology } from './aboutData';

interface TechGridProps {
  technologies: Technology[];
}

const TechGrid = ({ technologies }: TechGridProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center"
  >
    {technologies.map((tech, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="flex flex-col items-center gap-2 p-3 rounded-2xl glass-morph shadow-smooth border border-neutral-100 dark:border-neutral-800"
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-md">
          {tech.icon}
        </div>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{tech.name}</span>
      </motion.div>
    ))}
  </motion.div>
);

export default TechGrid;
