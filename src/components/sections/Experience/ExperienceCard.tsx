import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ExperienceItem } from '../../../data/experienceData';

interface Props { experience: ExperienceItem; index: number; }

export const ExperienceCard = ({ experience, index }: Props) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'pt';

  return (
    <motion.div
      className="relative pl-16 sm:pl-24"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-4 top-1 w-8 h-8 rounded-full bg-[var(--lime)] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-black" />
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 hover:border-[var(--lime)]/30 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-white font-bold text-lg">{experience.position[lang]}</h3>
            <p className="text-[var(--lime)] text-sm">{experience.company}</p>
          </div>
          <div className="text-right">
            <span className="text-[var(--muted)] text-sm block">{experience.period}</span>
            <span className="text-[var(--muted)] text-xs">{experience.location[lang]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {experience.techStack.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-md bg-[var(--lime)]/10 text-[var(--lime)] border border-[var(--lime)]/20">
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2">
          {experience.responsibilities[lang].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[var(--muted)] text-sm">
              <span className="mt-2 w-1 h-1 rounded-full bg-[var(--lime)] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;