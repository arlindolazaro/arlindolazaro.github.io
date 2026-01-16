import { motion } from 'framer-motion';
import type { ServiceType } from './servicesData';
import { fadeInUp } from '../../../lib/animations';

interface Props {
  service: ServiceType;
}

const ServiceCard = ({ service }: Props) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -8, scale: 1.03 }}
    tabIndex={0}
    role="group"
    className="
      group relative
      bg-black/70 backdrop-blur-xl
      rounded-2xl border border-white/10
      transition-all duration-300 transform-gpu
      hover:shadow-[0_20px_40px_-12px_rgba(124,58,237,0.35)]
      focus:outline-none focus:ring-2 focus:ring-indigo-500/50

      /* Responsividade */
      p-4 sm:p-6
      flex flex-col items-center text-center
      h-full
    "
  >
    {/* Glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-indigo-600/8 via-transparent to-indigo-700/8" />

    {/* Icon */}
    <div className="
      relative z-10
      w-12 h-12 sm:w-16 sm:h-16
      rounded-xl
      flex items-center justify-center
      mb-3 sm:mb-5
      bg-gradient-to-br from-indigo-600 to-indigo-700
      text-white
      shadow-lg
      text-base sm:text-xl
    ">
      {service.icon}
    </div>

    {/* Title */}
    <h3 className="relative z-10 text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-3">
      {service.title}
    </h3>

    {/* Description */}
    <p className="
      relative z-10
      text-xs sm:text-sm
      text-neutral-400
      leading-relaxed
      max-w-[95%]

      /* Limite no mobile */
      line-clamp-3 sm:line-clamp-none
    ">
      {service.description}
    </p>

    {/* CTA */}
    <a
      href="#contact"
      className="
        relative z-10
        mt-3 sm:mt-6
        px-4 py-2
        rounded-lg
        bg-white/5
        border border-white/10
        text-xs sm:text-sm
        text-neutral-200
        hover:bg-white/10
        transition-colors duration-300
      "
    >
      Saiba mais
    </a>
  </motion.div>
);

export default ServiceCard;
