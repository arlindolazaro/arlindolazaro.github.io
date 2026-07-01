import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../../../data/projectData';

interface Props { project: Project; large?: boolean; }

export const ProjectCard = ({ project, large }: Props) => {
  const { t } = useTranslation();
  const hasImage = Boolean(project.image);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden
                  hover:border-[var(--lime)]/40 transition-colors duration-300
                  ${large ? 'lg:grid lg:grid-cols-2' : 'flex flex-col h-full'}`}
    >
      {hasImage ? (
        <div className={`relative overflow-hidden ${large ? 'aspect-video lg:aspect-auto' : 'aspect-video'}`}>
          <img
            src={project.image}
            alt={t(project.titleKey)}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Overlay escuro intencional para legibilidade dos badges sobre a imagem, em ambos os temas */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent ${large ? 'lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-transparent' : ''}`} />

          {project.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-[var(--lime)]/30 rounded-full pl-2 pr-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--lime)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--lime)]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--lime)]">
                {t('projects.featured')}
              </span>
            </div>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 flex items-center gap-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-[9px]" /> Live
            </a>
          )}
        </div>
      ) : (
        <div className={`h-1 w-full bg-[var(--lime)] ${large ? 'lg:hidden' : ''}`} />
      )}
      {large && !hasImage && <div className="hidden lg:block w-1 bg-[var(--lime)]" />}

      <div className={`p-6 sm:p-8 flex flex-col ${large ? 'justify-center' : 'flex-1'}`}>
        {!hasImage && (
          <div className="flex gap-2 mb-4">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span key={i} className="w-8 h-8 rounded-lg bg-[var(--black)] border border-[var(--border)] flex items-center justify-center text-[var(--lime)] text-sm">
                {tech.icon}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className={`font-black text-[var(--text)] ${large ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
            {t(project.titleKey)}
          </h3>
          {project.featured && !hasImage && (
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
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-[var(--black)] text-[var(--muted)] border border-[var(--border)]">
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--lime)]/40 text-xs font-medium transition-colors"
          >
            <FaGithub /> {t('projects.code')}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--lime)] text-black text-xs font-bold hover:brightness-110 transition-colors"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;