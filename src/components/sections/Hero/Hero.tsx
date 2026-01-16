// Hero.tsx
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HeroButtons } from './HeroButtons';
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  heroImage,
  heroTitle,
} from '../../../lib/animations';

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fundo com gradiente violet/indigo premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-black via-black to-indigo-950/20 pointer-events-none" />

      {/* Blobs decorativos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-600/40 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-700/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto min-h-[calc(100vh-5rem)] py-16 sm:py-28 px-4 sm:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* IMAGEM */}
          <motion.div
            variants={heroImage}
            whileHover="hover"
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {imgOk ? (
                <motion.div
                  animate={{
                    rotateY: [0, 6, 0, -6, 0],
                    rotateX: [0, 6, 0, -6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <img
                    src="/images/perfil.webp"
                    alt="Arlindo Cau"
                    loading="lazy"
                    onError={() => setImgOk(false)}
                    className="
                      w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                      rounded-full object-cover
                      shadow-2xl
                      ring-4 ring-indigo-500/30
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                  <div className="absolute inset-0 rounded-full bg-indigo-500/15 blur-2xl -z-10" />
                </motion.div>
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-2xl">
                  AC
                </div>
              )}
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.p
              variants={heroTitle}
              className="text-sm font-mono tracking-widest text-indigo-400 mb-2"
            >
              OLÁ, EU SOU
            </motion.p>

            <motion.h1
              variants={heroTitle}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4"
            >
              <span className="text-white">Arlindo</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                Cau
              </span>
            </motion.h1>

            <motion.h2
              variants={heroTitle}
              className="text-lg sm:text-xl md:text-3xl font-semibold mb-6 sm:mb-8 text-neutral-300"
            >
              Software Developer
            </motion.h2>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-6 items-center justify-center md:justify-start w-full"
            >
              <HeroButtons isMounted={isMounted} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SCROLL CTA */}
        <motion.div
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <span className="text-sm font-semibold text-indigo-400 mb-3 tracking-wider">
              SAIBA MAIS
            </span>
            <div
              className="
                w-14 h-14 rounded-full
                bg-white/5 border border-white/10
                backdrop-blur
                flex items-center justify-center
              "
            >
              <FaChevronDown className="text-lg text-indigo-400 animate-bounce" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
