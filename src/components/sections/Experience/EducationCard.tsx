import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
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

  const statusLabel = {
    completed: t('education.statusCompleted'),
    'in-progress': t('education.statusInProgress'),
    ongoing: t('education.statusOngoing'),
  };

  const isActive = education.status === 'in-progress' || education.status === 'ongoing';

  return (
    <motion.div
      className="group grid grid-cols-[64px_1fr] sm:grid-cols-[140px_64px_1fr] gap-x-3 sm:gap-x-5"
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
            className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-7 -bottom-12 w-[2px] bg-[var(--border)]"
          />
        )}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[var(--border)] overflow-hidden flex items-center justify-center shrink-0
                     group-hover:border-[var(--lime)] transition-colors duration-300"
        >
          <img
            src={education.logo}
            alt={education.institution}
            className="w-full h-full object-cover"
          />
          {isActive && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--lime)] border-2 border-[var(--surface)]">
              <span className="absolute inset-0 rounded-full bg-[var(--lime)] animate-ping opacity-75" />
            </span>
          )}
        </motion.div>
      </div>

      {/* Conteúdo */}
      <div className="pb-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full flex items-start justify-between gap-3 text-left pt-3 -mx-2 px-2 rounded-lg hover:bg-white/[0.03] transition-colors duration-200 cursor-pointer"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-[var(--lime)] transition-colors duration-300">
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
              <div className="mt-3 relative rounded-r-lg bg-white/[0.02] border-l-2 border-[var(--lime)]/40 pl-4 pr-4 py-3 sm:pl-5 sm:py-4">
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
                        className="px-2 py-1 text-[10px] rounded-md border border-[var(--border)] text-[var(--muted)] uppercase tracking-wider hover:border-[var(--lime)]/40 hover:text-[var(--lime)] transition-colors duration-200"
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