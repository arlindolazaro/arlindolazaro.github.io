// ServiceCard.tsx
import { motion } from 'framer-motion';
import type { ServiceType } from './servicesData';

interface Props {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      type: 'spring',
      stiffness: 80,
      damping: 12,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700"
  >
    <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-4 shadow-inner">
      {service.icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {service.description}
    </p>
  </motion.div>
);

export default ServiceCard;
