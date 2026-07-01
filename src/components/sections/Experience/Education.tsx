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
    offset: ['start 75%', 'end 60%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="education" className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          04 — {t('education.title')}
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-6xl font-black text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('education.title').split(' ')[0]}{' '}
          <span className="accent-italic">{t('education.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>

        <div ref={timelineRef} className="relative">
          {/* Linha de progresso que preenche conforme o scroll */}
          <motion.div
            aria-hidden
            className="hidden sm:block absolute left-[164px] top-6 w-[2px] bg-[var(--lime)] origin-top z-0"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 relative z-10">
            {education.map((edu, i) => (
              <EducationCard
                key={i}
                education={edu}
                index={i}
                isLast={i === education.length - 1}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;