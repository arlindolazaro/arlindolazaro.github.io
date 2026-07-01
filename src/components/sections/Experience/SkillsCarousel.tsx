import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SKILLS } from '../../../data/skillsData';

const SkillsCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[360px] flex items-center justify-center">
      <div className="flex items-center gap-8 overflow-hidden">
        {SKILLS.map((skill, i) => {
          const offset = i - index;
          const isActive = offset === 0;
          return (
            <motion.div
              key={i}
              animate={{
                scale: isActive ? 1.15 : 0.85,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                x: offset * 220,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
              }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="
                absolute w-48 h-48
                rounded-2xl
                bg-[var(--surface)] backdrop-blur-2xl
                border border-[var(--border)]
                flex flex-col items-center justify-center gap-3
              "
              style={{
                boxShadow: isActive
                  ? '0 0 45px rgba(168,224,99,0.35)'
                  : '0 0 25px rgba(0,0,0,0.25)',
              }}
            >
              <span className="text-3xl text-[var(--text)]">{skill.icon}</span>
              <span className="text-sm text-[var(--muted)]">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--lime)]">
                {skill.level}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-6 flex gap-4">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className="px-4 py-2 text-xs border border-[var(--border)] rounded-full text-[var(--muted)] hover:border-[var(--lime)] hover:text-[var(--lime)] transition-colors"
        >
          {t('skills.prev')}
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(i + 1, SKILLS.length - 1))}
          className="px-4 py-2 text-xs border border-[var(--border)] rounded-full text-[var(--muted)] hover:border-[var(--lime)] hover:text-[var(--lime)] transition-colors"
        >
          {t('skills.next')}
        </button>
      </div>
    </div>
  );
};

export default SkillsCarousel;