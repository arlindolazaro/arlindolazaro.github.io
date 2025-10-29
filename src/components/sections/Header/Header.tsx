import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from '../../common/ThemeToggle';
import { createPortal } from 'react-dom';

const NAV_ITEMS = [
  { name: 'INÍCIO', path: '#home' },
  { name: 'SOBRE', path: '#about' },
  { name: 'SERVIÇOS', path: '#servicos' },
  { name: 'PROJECTOS', path: '#projects' },
  { name: 'EXPERIÊNCIA', path: '#experience' },
  { name: 'CONTACTO', path: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll do header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detecta seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let current = '#home';

      NAV_ITEMS.forEach(item => {
        const el = document.querySelector(item.path);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + scrollY;
          const elHeight = el.clientHeight;
          if (scrollY >= elTop - windowHeight * 0.3 &&
              scrollY < elTop + elHeight - windowHeight * 0.3) {
            current = item.path;
          }
        }
      });
      setActiveItem(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave com compensação do header
  const handleNavClick = useCallback((path: string) => {
    setActiveItem(path);
    setIsMenuOpen(false);

    setTimeout(() => {
      const el = document.querySelector(path);
      const header = document.querySelector('header');
      if (el && header) {
        const headerHeight = header.clientHeight;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
        window.scrollTo({
          top: pos,
          behavior: 'smooth'
        });
      }
    }, 200);
  }, []);

  // Fechar menu com ESC ou clique fora
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
    }`} role="banner">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:opacity-80 transition-all duration-200 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Ir para o início"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg"
          >
            <FontAwesomeIcon icon={faCode} className="text-white" size="lg" />
          </motion.div>
          <div className="hidden sm:block">
            <div className="font-bold text-lg leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Arlindo Cau
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
              Web Developer
            </div>
          </div>
        </motion.a>

        {/* Menu & Theme */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="p-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile: renderizado via portal para evitar conflitos de stacking context do header */}
      {typeof document !== 'undefined' && isMenuOpen && createPortal(
        <AnimatePresence>
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              ref={panelRef}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto rounded-l-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex flex-col h-full">
                {/* Cabeçalho do painel */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-wider">
                      ARLINDO CAU
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Web Developer
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fechar menu"
                    className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Navegação */}
                <nav className="flex-1 p-4 sm:p-6">
                  <div className="space-y-2">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full text-left px-4 py-4 rounded-lg transition-colors flex items-center justify-between text-lg sm:text-base font-semibold ${
                          activeItem === item.path
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.04 }}
                      >
                        <span className="flex-1">{item.name}</span>
                        <FaChevronRight
                          size={14}
                          className={`ml-3 transition-transform duration-200 ${
                            activeItem === item.path ? 'text-white' : 'text-gray-400'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Rodapé */}
                <div className="menu-footer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tema</span>
                    <ThemeToggle />
                  </div>
                  <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Arlindo Cau
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};

export default Header;
