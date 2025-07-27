import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_replyto", formData.email);
      form.append("_subject", `Nova mensagem de ${formData.name}`);

      const response = await fetch("https://formsubmit.co/tbqbusiness258@gmail.com", {
        method: "POST",
        body: form
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        console.error("Erro ao enviar: resposta não OK");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Vamos Conversar
            </span>
          </h2>
          <div className="h-1 w-24 bg-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Estou disponível para oportunidades e colaborações. Entre em contacto!
          </p>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Informações de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full space-y-8">
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
                  <a href="mailto:arlindolazaro202@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
                    href="https://github.com/devLazarus258"
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

          {/* Formulário de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      ENVIAR MENSAGEM
                    </>
                  )}
                </motion.button>
              </form>
            </div>
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
            className="fixed bottom-8 right-8 z-50 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-green-200 dark:border-green-800/50"
          >
            <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <span className="font-medium">Mensagem enviada com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
