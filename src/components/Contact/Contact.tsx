import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/arlindolazaro202@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nova mensagem de ${formData.name}: ${formData.subject}`
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);
      }
    } catch (error) {
      console.error('Erro no envio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">CONTACTO</h2>
          <p className="text-gray-600">
            Estou disponível para oportunidades e colaborações. Entre em contacto!
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    ENVIAR
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Popup de sucesso */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 bg-green-100 text-green-800 p-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <div className="bg-green-200 p-2 rounded-full">
              <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            </div>
            <span className="font-medium">Mensagem enviada com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;