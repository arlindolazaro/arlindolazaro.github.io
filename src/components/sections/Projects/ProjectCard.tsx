import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../../../data/projectData';

interface Props { project: Project; large?: boolean; }

export const ProjectCard = ({ project, large }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`group bg-black border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--lime)]/30 transition-colors duration-300 ${large ? 'md:flex' : ''}`}
    >
      {/* Accent top bar */}
      <div className={`h-1 w-full bg-[var(--lime)] ${large ? 'md:hidden' : ''}`} />
      {large && <div className="hidden md:block w-1 bg-[var(--lime)]" />}

      <div className={`p-6 sm:p-8 flex flex-col ${large ? 'flex-1' : 'h-full'}`}>
        {/* Stack icons */}
        <div className="flex gap-2 mb-4">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span key={i} className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--lime)] text-sm">
              {tech.icon}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className={`font-black text-white ${large ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
            {t(project.titleKey)}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--lime)] text-black rounded-full whitespace-nowrap">
              {t('projects.featured')}
            </span>
          )}
        </div>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-1">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-[var(--surface)] text-white/50 border border-[var(--border)]">
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] text-white/60 hover:text-white hover:border-white/30 text-xs font-medium transition-colors">
            <FaGithub /> {t('projects.code')}
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--lime)] text-black text-xs font-bold hover:bg-white transition-colors">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;