import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HeroButtons } from './HeroButtons';
import { fadeInUp, staggerContainer, fadeIn, heroImage, heroTitle } from '../../../lib/animations';


export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
    >
      {/* Background com efeito de Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white to-gray-100/90 dark:from-gray-900/95 dark:via-gray-900 dark:to-gray-800/95 backdrop-blur-sm" />
      
      {/* Padrões geométricos animados no fundo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto min-h-[calc(100vh-5rem)] py-20 px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={heroImage}
            whileHover="hover"
            className="md:col-span-5 flex justify-center perspective-1000"
          >
            <div className="relative group">
              {imgOk ? (
                <motion.div
                  className="relative z-20"
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="/images/perfil.webp"
                    alt="Arlindo Cau"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgOk(false)}
                    className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-indigo-400/30 dark:ring-indigo-500/40 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20 blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              ) : (
                <motion.div
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-indigo-400/30 dark:ring-indigo-500/40"
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AC
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p 
              variants={heroTitle}
              className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-mono mb-2 tracking-wider"
            >
              OLÁ, EU SOU
            </motion.p>

            <motion.h1 
              variants={heroTitle}
              className="text-4xl md:text-6xl font-bold mb-3 relative"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Arlindo
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Cau
              </span>
              <motion.span 
                className="absolute -z-10 blur-2xl opacity-30 dark:opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  Arlindo Cau
                </span>
              </motion.span>
            </motion.h1>

            <motion.h2 
              variants={heroTitle}
              className="text-xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400"
            >
              Web Developer
            </motion.h2>

            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4 items-center justify-center w-full"
              whileHover={{ scale: 1.02 }}
            >
              <HeroButtons isMounted={isMounted} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA flutuante com efeito 3D */}
        <motion.div 
          className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-10 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="flex flex-col items-center group focus:outline-none"
            aria-label="Scroll para próxima seção"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.span 
              className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-3 tracking-wider"
              animate={{
                y: [0, -4, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              SAIBA MAIS
            </motion.span>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                rotateX: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 dark:group-hover:shadow-indigo-400/25 transition-all duration-300 border border-indigo-500/20 dark:border-indigo-400/20"
            >
              <FaChevronDown className="text-lg text-indigo-500 dark:text-indigo-400 transform group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;