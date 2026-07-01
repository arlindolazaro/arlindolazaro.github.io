import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import type { EducationItem } from '../../../data/educationData';

const EducationCard = ({
  education,
  index,
  isLast,
  defaultOpen = false,
}: {
  education: EducationItem;
  index: number;
  isLast: boolean;
  defaultOpen?: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'pt';

  const [open, setOpen] = useState(defaultOpen);

  const statusLabel: Record<string, string> = {
    completed: t('education.statusCompleted'),
    'in-progress': t('education.statusInProgress'),
    ongoing: t('education.statusOngoing'),
  };

  const isActive =
    education.status === 'in-progress' ||
    education.status === 'ongoing';

  return (
    <motion.div
      className="group relative grid grid-cols-[1fr] sm:grid-cols-[120px_64px_1fr] gap-x-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.12,
        duration: 0.55,
        ease: 'easeOut',
      }}
    >
      {/* YEAR */}
      <div className="hidden sm:flex flex-col items-end justify-start pt-6">
        <motion.span
          className="text-[var(--lime)] font-black text-xl tabular-nums leading-none"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        >
          {education.period}
        </motion.span>

        <span className="text-[var(--muted)] text-[10px] uppercase tracking-widest mt-1">
          {education.status === 'completed'
            ? t('education.statusCompleted')
            : t('education.statusInProgress')}
        </span>
      </div>

      {/* NODE */}
      <div className="hidden sm:flex flex-col items-center relative">
        {!isLast && (
          <div className="absolute top-[52px] left-1/2 -translate-x-1/2 bottom-0 w-[2px] bg-transparent" />
        )}

        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`relative mt-4 w-14 h-14 rounded-full flex items-center justify-center
            border-2 overflow-hidden bg-[var(--card)] z-10 shrink-0 shadow-lg
            transition-all duration-300
            ${
              open
                ? 'border-[var(--lime)] shadow-[0_0_20px_rgba(168,224,99,0.25)]'
                : 'border-[var(--border)] group-hover:border-[var(--lime)]/60'
            }`}
        >
          <img
            src={education.logo}
            alt={education.institution}
            className="w-full h-full object-cover"
          />

          {isActive && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[var(--lime)] border-2 border-[var(--background)] z-20">
              <span className="absolute inset-0 rounded-full bg-[var(--lime)] animate-ping opacity-70" />
            </span>
          )}
        </motion.div>

        <motion.div
          animate={{ opacity: open ? 1 : 0.3 }}
          className="w-[2px] flex-1 bg-gradient-to-b from-[var(--lime)]/60 to-transparent mt-1"
        />
      </div>

      {/* CARD */}
      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        {/* Mobile */}
        <div className="sm:hidden flex items-center gap-2 mb-3 mt-1">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--lime)] bg-[var(--card)] overflow-hidden flex-shrink-0">
            <img
              src={education.logo}
              alt={education.institution}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-[var(--lime)] font-black text-lg">
            {education.period}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={`w-full text-left rounded-2xl border transition-all duration-300 p-5 sm:p-6
            ${
              open
                ? 'bg-[var(--surface)] border-[var(--lime)]/30 shadow-[0_0_30px_rgba(168,224,99,0.07)]'
                : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--lime)]/20'
            }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[var(--lime)] text-xs font-mono tracking-widest uppercase mb-1.5">
                {education.institution}
              </p>

              <h3 className="text-[var(--text)] font-black text-base sm:text-xl leading-snug mb-3">
                {education.degree[lang]}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-[var(--muted)] text-xs">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-[var(--lime)]/60" />
                  {education.period}
                </span>

                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-[var(--lime)]/60" />
                  {education.location[lang]}
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border
                    ${
                      isActive
                        ? 'bg-[var(--lime)]/10 text-[var(--lime)] border-[var(--lime)]/30'
                        : 'bg-[var(--card)] text-[var(--muted)] border-[var(--border)]'
                    }`}
                >
                  {statusLabel[education.status]}
                </span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors duration-300
                ${
                  open
                    ? 'border-[var(--lime)] text-[var(--lime)] bg-[var(--lime)]/10'
                    : 'border-[var(--border)] text-[var(--muted)]'
                }`}
            >
              <FaChevronDown className="text-xs" />
            </motion.div>
          </div>
        </button>

        {/* A Parte 2 começa aqui com o AnimatePresence */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="overflow-hidden"
            >
              <div className="mt-2 rounded-b-2xl border border-t-0 border-[var(--lime)]/20 bg-[var(--surface)] px-5 sm:px-6 pt-5 pb-6">
                {/* Description */}
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                  {education.description[lang]}
                </p>

                {/* Focus tags */}
                {education.focus && (
                  <div className="flex flex-wrap gap-2">
                    {education.focus.map((focus, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="px-3 py-1 text-[10px] rounded-full border border-[var(--border)]
                                   text-[var(--muted)] uppercase tracking-wider
                                   hover:border-[var(--lime)]/40
                                   hover:text-[var(--lime)]
                                   transition-colors duration-200 cursor-default"
                      >
                        {focus}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default EducationCard;