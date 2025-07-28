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
    className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center"
  >
    {technologies.map((tech, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
      >
        <div className="text-4xl">{tech.icon}</div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
      </div>
    ))}
  </motion.div>
);

export default TechGrid;
