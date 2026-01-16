// TechCarousel.tsx
import { motion } from 'framer-motion';
import type { Technology } from './aboutData';

interface TechCarouselProps {
  technologies: Technology[];
}

const TechCarousel = ({ technologies }: TechCarouselProps) => {
  return (
    <div className="mt-24 w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="
              min-w-[140px]
              flex flex-col items-center gap-3
              p-4
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur
              shadow-lg
            "
          >
            <div className="
              w-14 h-14
              flex items-center justify-center
              rounded-full
              text-3xl
              bg-gradient-to-br from-indigo-600 to-indigo-700
              text-white
            ">
              {tech.icon}
            </div>

            <span className="text-sm font-medium text-neutral-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarousel;
