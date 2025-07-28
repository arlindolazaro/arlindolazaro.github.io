import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (substituir por chamada real se necessário)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="lg:w-1/2"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
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

          {/* Email */}
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

          {/* Mensagem */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            />
          </motion.div>

          {/* Botão Enviar */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
          </motion.button>
        </form>

        {/* Popup de sucesso */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 p-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faCheck} />
              Mensagem enviada com sucesso!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ContactForm;
