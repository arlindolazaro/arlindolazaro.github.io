import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ServiceType } from '../../../data/servicesData';

const ServiceCard = ({ service }: { service: ServiceType }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[var(--lime)]/30 transition-all duration-300 h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-[var(--lime)]/10 border border-[var(--lime)]/20 flex items-center justify-center text-[var(--lime)] text-xl mb-5 group-hover:bg-[var(--lime)] group-hover:text-black transition-colors duration-300">
        {service.icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{t(service.titleKey)}</h3>
      <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{t(service.descriptionKey)}</p>
      <a href="#contact"
        className="mt-6 text-[var(--lime)] text-xs font-semibold uppercase tracking-wider hover:underline">
        {t('services.learnMore')} →
      </a>
    </motion.div>
  );
};

export default ServiceCard;