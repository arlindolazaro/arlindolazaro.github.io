import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ServiceType } from '../../../data/servicesData';

interface Props {
  service: ServiceType;
  index?: number;
}

const ServiceCard = ({ service, index }: Props) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(280px circle at ${x} ${y}, rgba(168,224,99,0.14), transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[var(--lime)]/40 transition-colors duration-300 h-full overflow-hidden [transform-style:preserve-3d]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightBg }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--lime)]/0 to-transparent group-hover:via-[var(--lime)]/60 transition-all duration-500" />

      {typeof index === 'number' && (
        <span
          className="absolute top-4 right-5 text-[10px] font-mono text-[var(--muted)]/40 group-hover:text-[var(--lime)]/40 transition-colors select-none"
          style={{ transform: 'translateZ(24px)' }}
        >
          0{index + 1}
        </span>
      )}

      <div
        className="w-12 h-12 rounded-xl bg-[var(--lime)]/10 border border-[var(--lime)]/20 flex items-center justify-center text-[var(--lime)] text-xl mb-5 group-hover:bg-[var(--lime)] group-hover:text-black transition-colors duration-300"
        style={{ transform: 'translateZ(36px)' }}
      >
        {service.icon}
      </div>

      <h3
        className="text-[var(--text)] font-bold text-lg mb-3"
        style={{ transform: 'translateZ(24px)' }}
      >
        {t(service.titleKey)}
      </h3>

      <p
        className="text-[var(--muted)] text-sm leading-relaxed flex-1"
        style={{ transform: 'translateZ(12px)' }}
      >
        {t(service.descriptionKey)}
      </p>


      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1 text-[var(--lime)] text-xs font-semibold uppercase tracking-wider hover:gap-2 transition-all w-fit"
        style={{ transform: 'translateZ(24px)' }}
      >
        {t('services.learnMore')} →
      </a>
    </motion.div >
  );
};

export default ServiceCard;