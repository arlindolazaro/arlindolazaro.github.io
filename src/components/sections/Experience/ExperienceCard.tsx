import { motion } from 'framer-motion';
import { fadeInUp } from '../../../lib/animations';
import type { ExperienceItem } from './experienceData';

interface Props {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: Props) => (
  <motion.div
    variants={fadeInUp}
    className="relative"
  >
    <div className="relative bg-neutral-900/60 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-700 dark:border-neutral-700 rounded-2xl p-8 transition-all duration-300 hover:bg-neutral-900/80 dark:hover:bg-neutral-800/80 hover:border-neutral-600 dark:hover:border-neutral-600 shadow-lg dark:shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Logo TT */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 border border-neutral-300 dark:border-neutral-600 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold tracking-widest text-white">
              TT
            </span>
          </div>

          <span className="mt-4 text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Transporte & Logística
          </span>
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white dark:text-white">
                {experience.position}
              </h3>
              <p className="text-lg text-neutral-300 dark:text-neutral-400">
                {experience.company}
              </p>
            </div>

            <div className="text-right">
              <span className="block text-sm font-medium text-neutral-200 dark:text-neutral-300">
                {experience.period}
              </span>
              <span className="block text-sm text-neutral-400 dark:text-neutral-500 mt-1">
                {experience.location}
              </span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {experience.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full 
                bg-indigo-500/20 text-indigo-300 
                dark:bg-indigo-500/20 dark:text-indigo-300 
                border border-indigo-500/40 dark:border-indigo-500/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Responsabilidades */}
          <ul className="space-y-3">
            {experience.responsibilities.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 text-neutral-300 dark:text-neutral-400"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ExperienceCard;
