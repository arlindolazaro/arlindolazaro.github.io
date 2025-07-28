import { motion } from 'framer-motion';

export const MobileMenu = ({
  isOpen,
  navItems,
  activeItem,
  onItemClick
}: {
  isOpen: boolean;
  navItems: { name: string; path: string }[];
  activeItem: string;
  onItemClick: (path: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ 
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 'auto' : 0
    }}
    className="md:hidden overflow-hidden"
  >
    <div className="flex flex-col space-y-2 py-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.path}
          onClick={() => onItemClick(item.path)}
          className={`px-4 py-2 rounded transition-colors ${
            activeItem === item.path 
              ? 'text-indigo-400' 
              : 'text-white hover:text-indigo-300'
          }`}
        >
          {item.name}
        </a>
      ))}
    </div>
  </motion.div>
);

export default MobileMenu;