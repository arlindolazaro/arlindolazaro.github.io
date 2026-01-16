import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge = ({ name, className = '' }: TechBadgeProps) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className={`px-3 py-1 text-sm font-medium bg-neutral-100 dark:bg-neutral-700 rounded-full ${className}`}
  >
    {name}
  </motion.span>
);