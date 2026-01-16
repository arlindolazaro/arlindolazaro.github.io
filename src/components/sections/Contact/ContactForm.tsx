import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const SuccessPopup = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-4 right-4 bg-black/90 border border-green-500/30
               rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg"
  >
    <FaCheck className="text-green-400" />
    <span className="text-sm text-neutral-200">Mensagem enviada com sucesso</span>
  </motion.div>
);

const ContactForm = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSuccess(true);
    setData({ name: '', email: '', message: '' });
    setSending(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <AnimatePresence>{success && <SuccessPopup />}</AnimatePresence>

      <form
        onSubmit={submit}
        className="bg-black/70 dark:bg-black/70 border border-white/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 transition-all duration-300"
      >
        {['name', 'email'].map(field => (
          <input
            key={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field === 'name' ? 'Seu nome' : 'Seu email'}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value={(data as any)[field]}
            onChange={e => setData({ ...data, [field]: e.target.value })}
            required
            className="w-full bg-black/40 dark:bg-black/40 border border-white/10 dark:border-white/10 rounded-xl
                       px-4 sm:px-5 py-3 sm:py-4 text-neutral-200 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/50 transition-all duration-300"
          />
        ))}

        <textarea
          rows={5}
          placeholder="Sua mensagem"
          value={data.message}
          onChange={e => setData({ ...data, message: e.target.value })}
          required
          className="w-full bg-black/40 dark:bg-black/40 border border-white/10 dark:border-white/10 rounded-xl
                     px-4 sm:px-5 py-3 sm:py-4 text-neutral-200 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-500
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/50 resize-none transition-all duration-300"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={sending}
          className="w-full flex items-center justify-center gap-3
                     bg-gradient-to-r from-indigo-600 to-indigo-700
                     text-white py-4 rounded-xl font-medium
                     disabled:opacity-50"
        >
          <FaPaperPlane />
          {sending ? 'ENVIANDO…' : 'ENVIAR MENSAGEM'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
