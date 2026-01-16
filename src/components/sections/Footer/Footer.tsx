import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 dark:bg-neutral-950 border-t border-neutral-800 dark:border-neutral-800 py-12 sm:py-14 transition-all duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center gap-5 sm:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-semibold text-white dark:text-white tracking-wide text-center"
        >
          Arlindo Lázaro · Software Developer
        </motion.h2>

        <SocialLinks />

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 text-center">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
