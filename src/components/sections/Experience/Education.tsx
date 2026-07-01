import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { education } from '../../../data/educationData';
import EducationCard from './EducationCard';

const Education = () => {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="education"
      className="py-28 bg-[var(--surface)] overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            04 — {t('education.title')}
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <motion.h2
              className="text-5xl sm:text-7xl font-black leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[var(--text)] block">
                {t('education.title').split(' ')[0]}
              </span>

              <span className="accent-italic block text-[var(--lime)]">
                {t('education.title').split(' ').slice(1).join(' ')}
              </span>
            </motion.h2>

            <motion.p
              className="text-[var(--muted)] text-sm max-w-xs leading-relaxed sm:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t('education.subtitle')}
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Linha de fundo */}
          <div className="hidden sm:block absolute left-[152px] top-7 bottom-7 w-[2px] bg-[var(--border)]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--lime)] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-0">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                education={edu}
                index={index}
                isLast={index === education.length - 1}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;