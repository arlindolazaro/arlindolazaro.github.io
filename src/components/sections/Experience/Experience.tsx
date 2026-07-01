import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../../data/experienceData';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          03 — {t('experience.title')}
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-6xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          {t('experience.title').split(' ')[0]}{' '}
          <span className="accent-italic">{t('experience.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        <p className="text-[var(--muted)] mb-16 max-w-xl">{t('experience.subtitle')}</p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[var(--border)]" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;