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
    whileHover={{ y: -8, scale: 1.02 }}
    tabIndex={0}
    role="group"
  className="group bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-700 max-w-full h-auto w-full max-w-md"
  >
    <div className="w-14 md:w-20 h-14 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-xl md:text-2xl">
      {service.icon}
    </div>

    <div className="flex-1 w-full flex flex-col items-center text-center">
      <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-2 md:mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-normal break-words text-pretty max-w-[90%] mx-auto">
        {service.description}
      </p>
    </div>

    <a
      href="#contact"
      className="mt-2 md:mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-300 text-sm font-medium hover:shadow-md transition"
    >
      Saiba Mais
    </a>
  </motion.div>
);

export default ServiceCard;
