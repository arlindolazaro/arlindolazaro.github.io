import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { services } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';
import MobileServicesCarousel from './MobileServicesCarousel';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          02 — {t('services.title')}
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <motion.h2
            className="text-4xl sm:text-6xl font-black text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('services.title').split(' ')[0]}{' '}
            <span className="accent-italic">
              {t('services.title').split(' ').slice(1).join(' ')}
            </span>
          </motion.h2>
          <p className="text-[var(--muted)] max-w-xs text-sm">{t('services.subtitle')}</p>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        <div className="md:hidden">
          <MobileServicesCarousel services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;