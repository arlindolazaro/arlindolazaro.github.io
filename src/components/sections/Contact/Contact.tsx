import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from '../../../data/ContactData';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.p className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          08 — {t('contact.title')}
        </motion.p>
        <motion.h2 className="text-4xl sm:text-6xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {t('contact.title').split(' ')[0]}{' '}
          <span className="accent-italic">{t('contact.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        <p className="text-[var(--muted)] mb-16 max-w-xl">{t('contact.subtitle')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;