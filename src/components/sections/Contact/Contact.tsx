import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from '../../../data/ContactData';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Grid pattern — consistente com Hero e Footer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-[500px] h-[500px] bg-[var(--lime)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          08 — {t('contact.title')}
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-6xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('contact.title').split(' ')[0]}{' '}
          <span className="accent-italic">
            {t('contact.title').split(' ').slice(1).join(' ')}
          </span>
        </motion.h2>

        <p className="text-[var(--muted)] mb-16 max-w-xl">{t('contact.subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;