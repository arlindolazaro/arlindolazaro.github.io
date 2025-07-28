import { motion } from 'framer-motion';

export const NavItem = ({
  item,
  isActive,
  onClick,
  index
}: {
  item: { name: string; path: string };
  isActive: boolean;
  onClick: (path: string) => void;
  index: number;
}) => (
  <motion.a
    href={item.path}
    onClick={() => onClick(item.path)}
    className={`px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
    }`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
  >
    {item.name}
  </motion.a>
);

export default NavItem;