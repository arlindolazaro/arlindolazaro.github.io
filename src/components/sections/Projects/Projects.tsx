import { motion } from 'framer-motion';
import { projects } from './projectData';
import { ProjectCard } from './ProjectCard';
import {AnimatedDivider} from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';

const Projects = () => {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Gradiente premium: neutral com destaque indigo */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-indigo-950/25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionTitle>Projectos</SectionTitle>
          <AnimatedDivider />
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
            Projectos focados em arquitetura sólida, segurança e experiência moderna.
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-20">
            <ProjectCard project={featured} />
          </div>
        )}

        {/* Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rest.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
