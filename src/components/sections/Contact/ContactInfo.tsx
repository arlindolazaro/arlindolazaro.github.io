import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="lg:w-1/2"
  >
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full space-y-7">
      {/* Localização */}
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 dark:text-indigo-400 text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Localização</h3>
          <p className="text-gray-600 dark:text-gray-300">1110, Matola, Maputo, Moçambique</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
          <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 dark:text-indigo-400 text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Email</h3>
          <a
            href="mailto:arlindolazaro202@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            arlindolazaro202@gmail.com
          </a>
        </div>
      </div>

      {/* Telefone */}
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
          <FontAwesomeIcon icon={faPhone} className="text-indigo-600 dark:text-indigo-400 text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Telefone</h3>
          <p className="text-gray-600 dark:text-gray-300">+258 86 530 4919</p>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="pt-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Redes Sociais</h3>
        <div className="flex space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/arlindo-lázaro-974932267/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
          <motion.a
            href="https://github.com/arlindolazaro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ContactInfo;
