import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from './skillsData';

const SkillsCarousel = () => {
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
                bg-black/70 backdrop-blur-2xl
                border border-neutral-800
                flex flex-col items-center justify-center gap-3
              "
              style={{
                boxShadow: isActive
                  ? '0 0 45px rgba(34,211,238,0.45)'
                  : '0 0 25px rgba(0,0,0,0.6)',
              }}
            >
              <span className="text-3xl text-white">{skill.icon}</span>
              <span className="text-sm text-neutral-300">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-300">
                {skill.level}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-4">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className="px-4 py-2 text-xs border border-neutral-700 rounded-full text-neutral-300 hover:border-cyan-400"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((i) => Math.min(i + 1, SKILLS.length - 1))}
          className="px-4 py-2 text-xs border border-neutral-700 rounded-full text-neutral-300 hover:border-cyan-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillsCarousel;
