import { useId, useState } from 'react';
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

/** Input com label flutuante — sobe e fica verde quando focado ou preenchido */
const FloatingInput = ({
  id,
  type,
  label,
  value,
  onChange,
}: {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="peer w-full bg-black/40 border border-white/10 rounded-xl
                   px-5 pt-6 pb-2 text-neutral-200
                   focus:outline-none focus:border-[var(--lime)]/50 focus:ring-2 focus:ring-[var(--lime)]/15
                   transition-all duration-300"
      />
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-200 pointer-events-none
          ${active ? 'top-2 text-[10px] tracking-wide uppercase text-[var(--lime)]' : 'top-1/2 -translate-y-1/2 text-sm text-neutral-500'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  const uid = useId();
  const [data, setData] = useState({ name: '', email: '', message: '', honey: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [msgFocused, setMsgFocused] = useState(false);

  const MAX_MESSAGE = 500;
  const msgActive = msgFocused || data.message.length > 0;

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
        {success && <SuccessPopup message={t('contact.successMsg')} />}
        {error && <ErrorPopup message={error} />}
      </AnimatePresence>

      <form
        onSubmit={submit}
        className="bg-black/70 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 transition-all duration-300"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <FloatingInput
            id={`${uid}-name`}
            type="text"
            label={t('contact.namePlaceholder')}
            value={data.name}
            onChange={(v) => setData({ ...data, name: v })}
          />
          <FloatingInput
            id={`${uid}-email`}
            type="email"
            label={t('contact.emailPlaceholder')}
            value={data.email}
            onChange={(v) => setData({ ...data, email: v })}
          />
        </div>

        {/* Honeypot — mantido fora de vista mas acessível a bots */}
        <input
          type="text"
          name="_honey"
          autoComplete="off"
          tabIndex={-1}
          value={data.honey}
          onChange={(e) => setData({ ...data, honey: e.target.value })}
          className="absolute -left-[9999px] w-px h-px opacity-0"
        />

        <div className="relative">
          <textarea
            id={`${uid}-message`}
            rows={5}
            maxLength={MAX_MESSAGE}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            onFocus={() => setMsgFocused(true)}
            onBlur={() => setMsgFocused(false)}
            required
            className="peer w-full bg-black/40 border border-white/10 rounded-xl
                       px-5 pt-6 pb-6 text-neutral-200 resize-none
                       focus:outline-none focus:border-[var(--lime)]/50 focus:ring-2 focus:ring-[var(--lime)]/15
                       transition-all duration-300"
          />
          <label
            htmlFor={`${uid}-message`}
            className={`absolute left-5 transition-all duration-200 pointer-events-none
              ${msgActive ? 'top-2 text-[10px] tracking-wide uppercase text-[var(--lime)]' : 'top-6 text-sm text-neutral-500'}
            `}
          >
            {t('contact.messagePlaceholder')}
          </label>
          <span className="absolute bottom-2 right-4 text-[10px] font-mono text-neutral-600">
            {data.message.length}/{MAX_MESSAGE}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={sending}
          className="relative w-full overflow-hidden flex items-center justify-center gap-3
                     bg-[var(--lime)] text-black py-4 rounded-xl font-semibold uppercase tracking-wide
                     hover:brightness-110
                     disabled:opacity-70 transition-all duration-300"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out"
          />
          <AnimatePresence mode="wait" initial={false}>
            {sending ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="relative z-10 flex items-center gap-3"
              >
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                {t('contact.sending')}
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="relative z-10 flex items-center gap-3"
              >
                <FaPaperPlane />
                {t('contact.send')}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;