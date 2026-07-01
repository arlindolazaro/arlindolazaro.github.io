import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SKILLS } from '../../../data/skillsData';

// Espera-se que cada skill tenha um campo `category`, ex:
// { icon: '...', name: 'TypeScript', level: 'expert', category: 'Programming Languages' }

const ORDER = [
  'Programming Languages',
  'Web Development',
  'Backend & Databases',
  'DevOps & Tools',
  'Security',
];

function groupByCategory<T extends { category: string }>(items: T[]) {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const key = item.category ?? 'Other';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  // categorias conhecidas primeiro, na ordem definida; o resto depois, pela ordem de aparição
  const known = ORDER.filter((c) => map.has(c));
  const rest = [...map.keys()].filter((c) => !ORDER.includes(c));
  return [...known, ...rest].map((category) => ({
    category,
    items: map.get(category)!,
  }));
}

const levelColor: Record<string, string> = {
  expert: 'text-[var(--lime)]',
  advanced: 'text-blue-400',
  intermediate: 'text-[var(--muted)]',
};

export const Skills = () => {
  const { t } = useTranslation();
  const groups = groupByCategory(SKILLS);

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          05 — {t('skills.title')}
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-6xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills &{' '}<span className="accent-italic">Expertise</span>
        </motion.h2>

        <p className="text-[var(--muted)] mb-16">{t('skills.subtitle')}</p>

        <div className="space-y-16">
          {groups.map(({ category, items }, groupIndex) => (
            <div key={category}>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {category.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="font-light text-white/60">
                    {category.split(' ').slice(-1)}
                  </span>
                </h3>
                <span className="text-[var(--lime)] text-2xl">→</span>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[var(--lime)]/40 hover:bg-[var(--lime)]/5 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.05 + i * 0.02 }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="text-2xl text-[var(--lime)] group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-xs text-white/70 text-center leading-tight">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider font-semibold ${levelColor[skill.level] ?? levelColor.intermediate
                        }`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;