import { motion } from 'framer-motion';
import type { Certificate } from './CertificatesInfo';

const CertificateCard = ({
  cert,
  onSelect,
}: {
  cert: Certificate;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 140 }}
      className="
        relative group cursor-pointer
        rounded-2xl overflow-hidden
        bg-black/60 dark:bg-black/60 backdrop-blur-2xl
        border border-neutral-800 dark:border-neutral-800
        hover:border-indigo-400/40 dark:hover:border-indigo-400/40
        shadow-[0_0_30px_rgba(0,0,0,0.8)]
        transition-all duration-300
      "
    >
      {/* Glow */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-700
        bg-gradient-to-br from-indigo-500/15 via-transparent to-indigo-600/15
        blur-xl
      " />

      {/* Image */}
      <div className="relative h-48 sm:h-[220px] flex items-center justify-center bg-neutral-950 dark:bg-neutral-950">
        <img
          src={cert.image}
          alt={cert.alt}
          loading="lazy"
          className="
            max-h-[140px] sm:max-h-[180px] object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}
      <div className="relative p-3 sm:p-4 text-center">
        <h4 className="text-xs sm:text-sm font-medium text-neutral-200 dark:text-neutral-200 leading-snug transition-colors duration-300">
          {cert.title}
        </h4>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
