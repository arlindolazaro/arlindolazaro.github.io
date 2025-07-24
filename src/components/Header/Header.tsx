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

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
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
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 text-white hover:bg-gray-800 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;