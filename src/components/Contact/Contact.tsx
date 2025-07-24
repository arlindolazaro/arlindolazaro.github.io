import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">CONTATO</h2>
          <p className="text-gray-600">
            Estou disponível para oportunidades e colaborações. Entre em contato!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Localização</h3>
                  <p className="text-gray-600">1110, Matola, Maputo, Moçambique</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:arlindolazaro202@gmail.com" className="text-gray-600 hover:text-indigo-600">
                    arlindolazaro202@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faPhone} className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Telefone</h3>
                  <p className="text-gray-600">+258 86 530 4919</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Redes Sociais</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/in/arlindo-lázaro-974932267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a
                    href="https://github.com/devLazarus258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Sua Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;