import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const SocialLinks = () => (
  <div className="flex space-x-6 mb-8">
    <motion.a
      whileHover={{ scale: 1.1 }}
      href="https://www.linkedin.com/in/arlindo-lázaro-974932267/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </motion.a>
    <motion.a
      whileHover={{ scale: 1.1 }}
      href="https://github.com/devLazarus258"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </motion.a>
  </div>
);

export default SocialLinks;