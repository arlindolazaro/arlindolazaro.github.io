import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="flex gap-4 sm:gap-6">
    {[
      { href: 'https://www.linkedin.com/in/arlindo-lázaro-974932267/', icon: <FaLinkedin /> },
      { href: 'https://github.com/arlindolazaro', icon: <FaGithub /> }
    ].map((item, i) => (
      <motion.a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.05 }}
        className="w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center rounded-xl
                   bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10
                   text-neutral-300 dark:text-neutral-300 hover:text-white dark:hover:text-white hover:bg-indigo-500/20 dark:hover:bg-indigo-500/20
                   transition-all duration-300 text-lg sm:text-xl"
        aria-label="Social link"
      >
        {item.icon}
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
