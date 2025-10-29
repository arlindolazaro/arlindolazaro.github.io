import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import HeroButtons from './HeroButtons';
import { fadeInUp, staggerContainer, fadeIn } from '../../../lib/animations';


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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-6"
    >
      <div className="container mx-auto min-h-[calc(100vh-5rem)] py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="md:col-span-5 flex justify-center">
            {imgOk ? (
              <img
                src="/images/perfil.jpg"
                alt="Arlindo Cau"
                onError={() => setImgOk(false)}
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-2 ring-indigo-300 dark:ring-indigo-600"
              />
            ) : (
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                AC
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm text-indigo-500 font-mono mb-2">OLÁ, EU SOU</p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Arlindo <span className="text-indigo-500">Cau</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Web Developer</h2>

            {/* Texto longo removido para um HERO mais limpo; mantenha somente títulos e CTAs */}

            <div className="flex flex-wrap gap-4 items-center justify-center w-full">
              <motion.div variants={fadeIn}>
                <HeroButtons isMounted={isMounted} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

  {/* CTA fixo no rodapé do hero para uma posição consistente */}
  {/* ocultar o CTA 'SAIBA MAIS' em telas mobile */}
  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-10">
          <motion.button
            onClick={scrollToNextSection}
            className="flex flex-col items-center group focus:outline-none"
            aria-label="Scroll para próxima seção"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-indigo-500 transition-colors">
              SAIBA MAIS
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-indigo-500 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-indigo-500 transition-colors"
            >
              <FaChevronDown className="text-lg" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;