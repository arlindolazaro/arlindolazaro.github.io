import { motion } from 'framer-motion';
import type { Skill } from './skillsData';

interface Props {
  title: string;
  skills: Skill[];
  accent: string;
}

const glow = {
  expert: 'shadow-[0_0_30px_rgba(34,211,238,0.35)]',
  advanced: 'shadow-[0_0_25px_rgba(217,70,239,0.3)]',
  intermediate: 'shadow-[0_0_20px_rgba(96,165,250,0.25)]',
};

const dot = {
  expert: 'bg-cyan-400',
  advanced: 'bg-indigo-400',
  intermediate: 'bg-blue-400',
};

const SkillCategory = ({ title, skills, accent }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="relative"
    >
      <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${accent} opacity-20 blur-xl`} />

      <div className="relative rounded-3xl p-8 bg-black/70 backdrop-blur-2xl border border-neutral-800">
        <h3 className="text-lg font-semibold tracking-widest uppercase text-white mb-6">
          {title}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className={`p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center gap-2 ${glow[skill.level]}`}
            >
              <span className="text-2xl text-white">{skill.icon}</span>
              <span className="text-xs text-neutral-300 text-center">{skill.name}</span>
              <span className={`w-2 h-2 rounded-full ${dot[skill.level]}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategory;
