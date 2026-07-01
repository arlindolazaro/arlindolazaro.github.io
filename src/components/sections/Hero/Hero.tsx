import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroButtons } from './HeroButtons';

export const Hero = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => { setIsMounted(true); return () => setIsMounted(false); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Lime glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--lime)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* LEFT — TEXT */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-white block">Arlindo</span>
              <span className="block" style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>
                Cau
              </span>
            </motion.h1>

            <motion.p
              className="text-[var(--muted)] text-lg sm:text-xl font-light mb-10 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t('hero.role')} —{' '}
              <span className="accent-italic text-[var(--lime)]">
                Full-Stack
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <HeroButtons isMounted={isMounted} />
            </motion.div>
          </motion.div>

          {/* RIGHT — PHOTO */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Lime accent behind photo */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--lime)] rounded-2xl" />

              {imgOk ? (
                <img
                  src="/images/perfil.webp"
                  alt="Arlindo Cau"
                  onError={() => setImgOk(false)}
                  className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl grayscale"
                />
              ) : (
                <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 rounded-2xl bg-[var(--surface)] flex items-center justify-center">
                  <span className="text-6xl font-black text-[var(--lime)]">AC</span>
                </div>
              )}

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-8 z-20 bg-[var(--lime)] text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg"
              >
                3+ Anos
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 bottom-12 z-20 bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg"
              >
                Full-Stack
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[var(--muted)] text-xs tracking-widest uppercase">{t('hero.scrollMore')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-[var(--lime)] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;