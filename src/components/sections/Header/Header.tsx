import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaHome,
  FaUser,
  FaConciergeBell,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaAward
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { createPortal } from 'react-dom';

/* =======================
   CONFIGURAÇÃO DE NAV
======================= */
const NAV_ITEMS = [
  { name: 'INÍCIO', path: '#home', icon: <FaHome /> },
  { name: 'SOBRE', path: '#about', icon: <FaUser /> },
  { name: 'SERVIÇOS', path: '#servicos', icon: <FaConciergeBell /> },
  { name: 'CERTIFICADOS', path: '#certificates', icon: <FaAward /> },
  { name: 'PROJECTOS', path: '#projects', icon: <FaProjectDiagram /> },
  { name: 'EXPERIÊNCIA', path: '#experience', icon: <FaBriefcase /> },
  { name: 'CONTACTO', path: '#contact', icon: <FaEnvelope /> },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* =======================
     SCROLL DO HEADER
  ======================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* =======================
     DETECTA SECÇÃO ACTIVA
  ======================= */
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const item of NAV_ITEMS) {
        const section = document.querySelector(item.path);
        if (!section) continue;

        const top = section.getBoundingClientRect().top + window.scrollY;
        const height = section.clientHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.path);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* =======================
     SCROLL SUAVE COM OFFSET
  ======================= */
  const handleNavClick = useCallback((path: string) => {
    setMenuOpen(false);
    setActiveSection(path);

    const section = document.querySelector(path);
    const header = document.querySelector('header');

    if (!section || !header) return;

    const offset = header.clientHeight + 8;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  /* =======================
     FECHAR MENU (ESC / CLICK FORA)
  ======================= */
  useEffect(() => {
    if (!menuOpen) return;

    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const clickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', esc);
    document.addEventListener('mousedown', clickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', esc);
      document.removeEventListener('mousedown', clickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      {/* =======================
          CONTAINER
      ======================= */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faCode} className="text-white" />
          </div>

          <div className="hidden sm:block">
            <div className="font-bold text-lg text-white dark:text-white group-hover:text-indigo-400 transition">
              Arlindo Cau
            </div>
            <div className="text-xs text-neutral-300 dark:text-neutral-400">Software Developer</div>
          </div>
        </motion.a>

        {/* CONTROLOS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="p-3 rounded-lg text-white dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* =======================
          MENU MOBILE (PORTAL)
      ======================= */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/70 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMenuOpen(false)}
                />

                <motion.div
                  ref={panelRef}
                  className="fixed top-20 right-4 w-64 bg-black/90 dark:bg-black/90 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl z-50 p-4 max-h-[80vh] overflow-auto"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                >
                  <nav className="space-y-1">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === item.path
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
                            : 'text-neutral-300 hover:bg-white/10 dark:hover:bg-white/10'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        {item.icon}
                        <span className="flex-1">{item.name}</span>
                        <FaChevronRight size={12} />
                      </motion.button>
                    ))}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};

export default Header;
