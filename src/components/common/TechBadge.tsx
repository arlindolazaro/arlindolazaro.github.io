import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge = ({ name, className = '' }: TechBadgeProps) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className={`px-3 py-1 text-sm font-medium bg-[var(--surface)] border border-[var(--border)] text-white/80 rounded-full hover:border-[var(--lime)]/40 hover:text-[var(--lime)] transition-colors duration-200 ${className}`}
  >
    {name}
  </motion.span>
);