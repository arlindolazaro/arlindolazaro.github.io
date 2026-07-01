import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '../../../data/projectData';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  const { t } = useTranslation();
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          06 — {t('projects.title')}
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <motion.h2
            className="text-4xl sm:text-6xl font-black text-[var(--text)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('projects.title').slice(0, 3)}{' '}
            <span className="accent-italic">{t('projects.title').slice(3)}</span>
          </motion.h2>
          <p className="text-[var(--muted)] max-w-xs text-sm">{t('projects.subtitle')}</p>
        </div>

        {featured && (
          <div className="mb-6">
            <ProjectCard project={featured} large />
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;