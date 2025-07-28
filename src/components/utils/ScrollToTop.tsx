import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        controls.start({
          y: [0, -5, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      } else {
        setIsVisible(false);
        controls.stop();
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 p-3 bg-indigo-600 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
      whileTap={{ scale: 0.9 }}
      animate={controls}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="text-white text-xl" />
    </motion.button>
  );
};
