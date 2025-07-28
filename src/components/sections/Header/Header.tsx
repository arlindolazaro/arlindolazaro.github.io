import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const navItems = [
  { name: 'INÍCIO', path: '#home' },
  { name: 'SOBRE', path: '#about' },
  { name: 'PROJECTOS', path: '#projects' },
  { name: 'EXPERIÊNCIA', path: '#experience' },
  { name: 'CONTACTO', path: '#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = navItems.map(item => {
        const el = document.querySelector(item.path);
        return el ? { path: item.path, offsetTop: el.getBoundingClientRect().top + scrollY } : null;
      }).filter(Boolean) as { path: string; offsetTop: number }[];

      const current = offsets.reduce((acc, item) => {
        return scrollY >= item.offsetTop - 80 ? item.path : acc;
      }, '#home');

      setActiveItem(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <a href="#home" className="text-white flex items-center justify-center">
              <FontAwesomeIcon icon={faCode} className="text-indigo-400" size="2x" />
            </a>
          </motion.div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeItem === item.path}
                onClick={() => setActiveItem(item.path)}
                index={index}
              />
            ))}
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navItems={navItems}
          activeItem={activeItem}
          onItemClick={(path) => {
            setActiveItem(path);
            setIsMenuOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;