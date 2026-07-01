import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const SuccessPopup = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-4 right-4 bg-black/90 border border-[var(--lime)]/30
               rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg z-10"
  >
    <FaCheck className="text-[var(--lime)]" />
    <span className="text-sm text-neutral-200">{message}</span>
  </motion.div>
);

const ErrorPopup = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-4 right-4 bg-black/90 border border-red-500/30
               rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg z-10"
  >
    <span className="text-sm text-red-400">{message}</span>
  </motion.div>
);

const ContactForm = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({ name: '', email: '', message: '', honey: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.honey) return;
    setSending(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/arlindolazaro202@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _honey: data.honey,
        }),
      });

      if (!response.ok) throw new Error('Network error');

      const result = await response.json();
      if (result.success === 'true' || result.success === true) {
        setSuccess(true);
        setData({ name: '', email: '', message: '', honey: '' });
      } else {
        throw new Error('Unexpected result');
      }
    } catch {
      setError(t('contact.errorMsg'));
    } finally {
      setSending(false);
      setTimeout(() => { setSuccess(false); setError(null); }, 3000);
    }
  };

  const fields = [
    { key: 'name', type: 'text', placeholder: t('contact.namePlaceholder') },
    { key: 'email', type: 'email', placeholder: t('contact.emailPlaceholder') },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <AnimatePresence>
        {success && <SuccessPopup message={t('contact.successMsg')} />}
        {error && <ErrorPopup message={error} />}
      </AnimatePresence>

      <form
        onSubmit={submit}
        className="bg-black/70 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 transition-all duration-300"
      >
        {fields.map(({ key, type, placeholder }) => (
          <input
            key={key}
            type={type}
            placeholder={placeholder}
            value={data[key]}
            onChange={(e) => setData({ ...data, [key]: e.target.value })}
            required
            className="w-full bg-black/40 border border-white/10 rounded-xl
                       px-4 sm:px-5 py-3 sm:py-4 text-neutral-200 placeholder-neutral-500
                       focus:outline-none focus:border-[var(--lime)]/50 focus:ring-2 focus:ring-[var(--lime)]/20 transition-all duration-300"
          />
        ))}

        {/* Honeypot */}
        <input
          type="text"
          name="_honey"
          autoComplete="off"
          tabIndex={-1}
          value={data.honey}
          onChange={(e) => setData({ ...data, honey: e.target.value })}
          className="hidden"
        />

        <textarea
          rows={5}
          placeholder={t('contact.messagePlaceholder')}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          required
          className="w-full bg-black/40 border border-white/10 rounded-xl
                     px-4 sm:px-5 py-3 sm:py-4 text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-[var(--lime)]/50 focus:ring-2 focus:ring-[var(--lime)]/20 resize-none transition-all duration-300"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={sending}
          className="w-full flex items-center justify-center gap-3
                     bg-[var(--lime)] text-black py-4 rounded-xl font-semibold uppercase tracking-wide
                     hover:brightness-110
                     disabled:opacity-50 transition-all duration-300"
        >
          <FaPaperPlane />
          {sending ? t('contact.sending') : t('contact.send')}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;