import { FaGithub, FaJava, FaReact, FaBootstrap, FaPhp, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import type { JSX } from 'react';

// Definindo tipos
type Technology = {
  name: string;
  icon: JSX.Element;
  color: string;
};

type Project = {
  title: string;
  description: string;
  stack: Technology[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  bgColor: string;
};

// Componente ProjectCard aprimorado
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className={`absolute inset-0 ${project.bgColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    
    <div className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl border-2 ${project.accentColor} border-opacity-20 dark:border-opacity-30 overflow-hidden transition-all duration-300 group-hover:border-opacity-50`}>
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
              {project.stack.slice(0, 2).map((tech: Technology, i: number) => (
                <span key={i} className={`text-xs font-medium px-2 py-1 ${tech.color} bg-opacity-20 dark:bg-opacity-30 rounded-lg`}>
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
          {project.stack.map((tech: Technology, i: number) => (
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
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
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
              className="flex-1 flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
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

const Projects = () => {
  const projectData: Project[] = [
    {
      title: "Sistema de Notícias",
      description: "API RESTful completa com autenticação JWT, documentação Swagger e testes automatizados. Arquitetura em camadas com Spring Boot.",
      stack: [
        { name: "Java", icon: <FaJava />, color: "bg-red-500" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "bg-blue-500" },
      ],
      githubUrl: "https://github.com/devLazarus258/backend-site-noticias-spring.git",
      demoUrl: "https://news-api-demo.com",
      accentColor: "border-red-500",
      bgColor: "bg-red-500"
    },
    {
      title: "E-commerce Premium",
      description: "Plataforma de comércio eletrônico com carrinho, checkout e painel administrativo. Design responsivo e otimizado para SEO.",
      stack: [
        { name: "PHP", icon: <FaPhp />, color: "bg-indigo-500" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-500" },
        { name: "MySQL", icon: <SiMysql />, color: "bg-blue-500" },
      ],
      githubUrl: "https://github.com/devLazarus258/LojaMasculina.git",
      accentColor: "border-amber-500",
      bgColor: "bg-amber-500"
    },
    {
      title: "EventHub Platform",
      description: "Aplicação moderna para descoberta de eventos com filtros avançados, mapa integrado e sistema de favoritos. PWA compatível.",
      stack: [
        { name: "React", icon: <FaReact />, color: "bg-blue-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "bg-gray-800" },
      ],
      githubUrl: "https://github.com/devLazarus258/EventHub-Frontend.git",
      demoUrl: "https://eventhub-demo.vercel.app",
      accentColor: "border-blue-500",
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Projetos</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '150px' }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"
          />
          
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções técnicas inovadoras com arquiteturas escaláveis e as melhores práticas de desenvolvimento
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projectData.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;