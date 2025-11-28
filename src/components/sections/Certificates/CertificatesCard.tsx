import React from 'react';
import { motion } from 'framer-motion';
import type { Certificate } from './CertificatesInfo';


const CertificateCard: React.FC<{ cert: Certificate; onSelect: () => void }> = ({ cert, onSelect }) => (
  <motion.div
    className="group bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all flex flex-col h-full px-2"
    onClick={onSelect}
    whileHover={{ y: -5 }}
  >
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-600 dark:to-gray-700 overflow-hidden min-h-[180px] md:min-h-[220px]">
      <img
        src={cert.image}
        alt={cert.alt}
        loading="lazy"
        className="max-h-[180px] md:max-h-[220px] w-auto max-w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        style={{ margin: '0 auto' }}
      />
    </div>
    <div className="p-3 flex items-center justify-center">
      <h4 className="text-base font-semibold text-gray-900 dark:text-white text-center whitespace-normal break-words">
        {cert.title}
      </h4>
    </div>
  </motion.div>
);

export default CertificateCard;
