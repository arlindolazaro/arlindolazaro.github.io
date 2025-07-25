import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navItems = [
  { name: 'INÍCIO', path: '#home' },
  { name: 'SOBRE', path: '#about' },
  { name: 'PROJECTOS', path: '#projects' }, 
  { name: 'EXPERIÊNCIA', path: '#experience' },
  { name: 'CONTACTO', path: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');

  const handleClick = (path: string) => {
    setActiveItem(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-white flex items-center justify-center">
              <FontAwesomeIcon icon={faCode} className="text-indigo-400" size="2x" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => {
              const isActive = activeItem === item.path;

              return (
                <motion.a
                  key={item.name}
                  href={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => {
                const isActive = activeItem === item.path;

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => handleClick(item.path)}
                    className={`px-4 py-2 rounded transition-colors ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-white hover:text-indigo-300'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
