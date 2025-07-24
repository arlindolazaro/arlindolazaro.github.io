import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold">ARLINDO CAU</h2>
            <p className="text-gray-400 text-center mt-2">Engenheiro de Software Full-Stack</p>
          </motion.div>
          
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
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center"
          >
            © {new Date().getFullYear()} Arlindo Lázaro Cau Júnior. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;