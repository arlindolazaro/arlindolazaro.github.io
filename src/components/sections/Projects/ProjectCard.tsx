// ProjectCard.tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../lib/animations';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from './projectData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative"
  >
    <div className={`absolute inset-0 ${project.bgColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

  <div className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl border-2 ${project.accentColor} border-opacity-20 dark:border-opacity-30 overflow-hidden transition-all duration-300 group-hover:border-opacity-50 group-hover:shadow-2xl`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${project.accentColor.replace('border', 'bg')} bg-opacity-20 mr-4`}>
            {project.stack[0].icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs font-medium px-2 py-1 ${tech.color} bg-opacity-20 dark:bg-opacity-30 rounded-lg`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.stack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-3 py-2 ${tech.color} bg-opacity-10 dark:bg-opacity-20 rounded-xl shadow-sm`}
            >
              {tech.icon}
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors btn-smooth"
          >
            <FaGithub className="mr-2" />
            Código
          </motion.a>

          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors btn-smooth"
            >
              <FaExternalLinkAlt className="mr-2" />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);
