// ServiceCard.tsx
import { motion } from 'framer-motion';
import type { ServiceType } from './servicesData';
import { fadeInUp } from '../../../lib/animations';

interface Props {
  service: ServiceType;
}

const ServiceCard = ({ service }: Props) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.04 }}
    className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu flex flex-col items-center text-center border border-gray-200 dark:border-gray-700"
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
