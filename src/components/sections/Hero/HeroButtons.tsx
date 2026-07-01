import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../../../context/LanguageContext';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const MagneticWrap = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export const HeroButtons = ({ isMounted }: { isMounted: boolean }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (!isMounted || isDownloading) return;
    setIsDownloading(true);
    const file =
      language === 'en' ? 'Arlindo_Lazaro_CV_EN.pdf' : 'Arlindo_Lazaro_CV.pdf';
    const a = document.createElement('a');
    a.href = `/documents/${file}`;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <MagneticWrap>
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--lime)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black hover:brightness-110 transition-all duration-200 w-full sm:w-auto"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
          />
          <span className="relative z-10 flex items-center gap-2">
            {t('hero.contactMe')}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </MagneticWrap>

      <MagneticWrap>
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-[var(--border)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[var(--text)] transition-colors duration-200 hover:border-[var(--lime)] hover:text-[var(--lime)] disabled:opacity-50 w-full sm:w-auto"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--lime)]/15 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
          />
          <span className="relative z-10 flex items-center gap-2">
            <FaDownload />
            {isDownloading ? t('hero.downloading') : t('hero.downloadCV')}
          </span>
        </button>
      </MagneticWrap>
    </div >
  );
};

export default HeroButtons;