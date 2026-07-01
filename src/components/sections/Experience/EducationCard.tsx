import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import type { EducationItem } from '../../../data/educationData';

const EducationCard = ({
  education,
  index,
  isLast,
}: {
  education: EducationItem;
  index: number;
  isLast: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'pt';
  const [open, setOpen] = useState(true);

  const statusLabel = {
    completed: t('education.statusCompleted'),
    'in-progress': t('education.statusInProgress'),
    ongoing: t('education.statusOngoing'),
  };

  return (
    <motion.div
      className="grid grid-cols-[64px_1fr] sm:grid-cols-[140px_64px_1fr] gap-x-3 sm:gap-x-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {/* Período — escondido em mobile, mostrado dentro do header */}
      <div className="hidden sm:flex flex-col items-end justify-start pt-3 text-right">
        <span className="text-[var(--lime)] font-bold text-sm leading-snug">{education.period}</span>
      </div>

      {/* Marcador na linha */}
      <div className="relative flex flex-col items-center">
        {!isLast && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-7 -bottom-12 w-[2px]"
            style={{ background: 'linear-gradient(to bottom, var(--lime), var(--border))' }}
          />
        )}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[var(--border)] overflow-hidden flex items-center justify-center shrink-0
                     group-hover:border-[var(--lime)]"
        >
          <img
            src={education.logo}
            alt={education.institution}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Conteúdo */}
      <div className="group pb-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-3 text-left pt-3"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                {education.degree[lang]}
              </h3>
              <span className="text-[var(--muted)] text-sm">{education.institution}</span>
            </div>
            <div className="sm:hidden text-[var(--lime)] font-semibold text-xs mt-1">
              {education.period}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 pt-1">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[var(--lime)]/10 text-[var(--lime)] border border-[var(--lime)]/20 whitespace-nowrap">
              {statusLabel[education.status]}
            </span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--muted)] group-hover:text-[var(--lime)] transition-colors"
            >
              <FaChevronDown className="text-xs" />
            </motion.span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-3 rounded-xl border border-dashed border-[var(--border)] group-hover:border-[var(--lime)]/30 transition-colors duration-300 px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {education.description[lang]}
                </p>
                <div className="text-xs text-[var(--muted)]/70 mt-3">
                  {education.location[lang]}
                </div>
                {education.focus && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {education.focus.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] rounded-md border border-[var(--border)] text-[var(--muted)] uppercase tracking-wider"
                      >
                        {f}
                      </span>
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