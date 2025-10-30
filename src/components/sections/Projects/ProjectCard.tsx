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

  <div className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl border ${project.accentColor} border-opacity-10 dark:border-opacity-20 overflow-hidden transition-all duration-300 group-hover:border-opacity-30 group-hover:shadow-xl hover:shadow-${project.accentColor.split('-')[1]}/20 backdrop-blur-sm backdrop-filter`}>
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-start mb-6">
          <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${project.accentColor.replace('border', 'bg')} bg-opacity-15 mr-5 transform rotate-3 transition-transform group-hover:rotate-6 shadow-lg`}>
            {project.stack[0].icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs font-semibold px-3 py-1.5 ${tech.color} bg-opacity-15 dark:bg-opacity-25 rounded-full shadow-sm backdrop-blur-sm transform transition-transform hover:scale-105`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.stack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 px-4 py-2.5 ${tech.color} bg-opacity-10 dark:bg-opacity-15 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700`}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`flex-1 flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300`}
          >
            <FaGithub className="mr-2.5 text-lg" />
            <span className="font-semibold">Código</span>
          </motion.a>

          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl hover:shadow-lg dark:hover:shadow-gray-800/30 transition-all duration-300`}
            >
              <FaExternalLinkAlt className="mr-2.5 text-lg" />
              <span className="font-semibold">Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);
