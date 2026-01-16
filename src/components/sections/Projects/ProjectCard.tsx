import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import type { Project } from './projectData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative group rounded-2xl bg-neutral-900 dark:bg-neutral-900 transition-colors overflow-hidden ${
        project.featured
          ? 'border-2 border-indigo-500/60 dark:border-indigo-500/60'
          : 'border border-white/10 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40'
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600/15 to-indigo-700/10 blur-xl" />
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-semibold shadow-lg">
          <FaStar className="w-3 h-3" />
          <span>Destaque</span>
        </div>
      )}

      <div className="relative p-5 sm:p-7 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 text-lg sm:text-xl flex-shrink-0">
            {project.stack[0].icon}
          </div>
          <h3 className="text-base sm:text-xl font-semibold text-neutral-100 dark:text-neutral-100">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 sm:px-3 py-1 rounded-full bg-white/5 dark:bg-white/5 text-neutral-300 dark:text-neutral-300 border border-white/10 dark:border-white/10"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2 sm:gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 text-neutral-200 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-colors duration-300"
          >
            <FaGithub />
            <span className="hidden sm:inline">Código</span>
            <span className="sm:hidden">Git</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs sm:text-sm font-medium hover:brightness-110 dark:hover:brightness-110 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              <span className="hidden sm:inline">Demo</span>
              <span className="sm:hidden">Ver</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
