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

const ErrorPopup = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-4 right-4 bg-black/90 border border-red-500/30
               rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg"
  >
    <span className="text-sm text-red-400">{message}</span>
  </motion.div>
);

const ContactForm = () => {
  const [data, setData] = useState({ name: '', email: '', message: '', honey: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // if honeypot field is filled, abort early (probable bot)
      if (data.honey) {
        console.warn('Honeypot triggered, not submitting form');
        setSending(false);
        return;
      }

      const response = await fetch(
        'https://formsubmit.co/ajax/arlindolazaro202@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _honey: data.honey,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success === 'true' || result.success === true) {
        setSuccess(true);
        setData({ name: '', email: '', message: '', honey: '' });
      } else {
        throw new Error('unexpected result: ' + JSON.stringify(result));
      }
    } catch (err: any) {
      console.error('Error submitting contact form', err);
      setError('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setSending(false);
      setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <AnimatePresence>
        {success && <SuccessPopup />}
        {error && <ErrorPopup message={error} />}
      </AnimatePresence>

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
        {/* honeypot field to trap bots */}
        <input
          type="text"
          name="_honey"
          autoComplete="off"
          tabIndex={-1}
          value={data.honey}
          onChange={e => setData({ ...data, honey: e.target.value })}
          className="hidden"
        />

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
