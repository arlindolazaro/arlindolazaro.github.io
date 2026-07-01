import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { NAV_ITEMS } from '../../../lib/constants';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import ThemeToggle from '../../common/ThemeToggle';
import LanguageToggle from '../../common/LanguageToggle';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const paths = NAV_ITEMS.map(i => i.path);
  const activeSection = useScrollSpy({ paths });
  const [manualActive, setManualActive] = useState<string | null>(null);
  const current = manualActive ?? activeSection;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = useCallback((path: string) => {
    setMenuOpen(false);
    setManualActive(path);
    const section = document.querySelector(path);
    const header = document.querySelector('header');
    if (!section || !header) return;
    const top = section.getBoundingClientRect().top + window.pageYOffset - header.clientHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
    window.setTimeout(() => setManualActive(null), 700);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);

    const out = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', esc);
    document.addEventListener('click', out);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.removeEventListener('click', out);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[var(--black)]/90 backdrop-blur-xl border-b border-[var(--border)]'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button type="button" onClick={() => handleNav('#home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[var(--lime)] rounded-md flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo Arlindo Cau"
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="hidden sm:block text-[var(--text)] font-semibold text-sm group-hover:text-[var(--lime)] transition-colors">
            Arlindo Cau
          </span>
        </button>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />

          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${menuOpen
              ? 'bg-[var(--lime)] text-black'
              : 'bg-[var(--border)] text-[var(--text)] hover:bg-[var(--lime)] hover:text-black'
              }`}
          >
            {menuOpen ? 'FECHAR' : 'MENU'}
          </button>
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={panelRef}
                className="fixed inset-0 z-40 bg-[var(--black)] flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col items-center gap-6">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.button
                      key={item.key}
                      type="button"
                      onClick={() => handleNav(item.path)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className={`text-4xl sm:text-6xl font-bold uppercase tracking-tight transition-colors duration-200 ${current === item.path
                        ? 'text-[var(--lime)]'
                        : 'text-[var(--muted)] hover:text-[var(--text)]'
                        }`}
                    >
                      {t(item.key)}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};

export default Header;