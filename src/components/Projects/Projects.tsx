import { FaGithub, FaJava, FaReact, FaBootstrap, FaPhp } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Backend Site de Notícias",
      description: "API RESTful para gestão de notícias desenvolvida com Spring Boot, com documentação Swagger.",
      technologies: [
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "MySQL/H2", icon: <SiMysql className="text-blue-600" /> },
      ],
      githubUrl: "https://github.com/devLazarus258/backend-site-noticias-spring.git",
      accentColor: "border-red-500"
    },
    {
      title: "Loja Masculina",
      description: "E-commerce de vestuário masculino desenvolvido como projeto final de Programação Web Avançada.",
      technologies: [
        { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      ],
      githubUrl: "https://github.com/devLazarus258/LojaMasculina.git",
      accentColor: "border-amber-500"
    },
    {
      title: "EventHub Frontend",
      description: "Plataforma para explorar e gerir eventos, desenvolvida com React e Tailwind CSS.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
      githubUrl: "https://github.com/devLazarus258/EventHub-Frontend.git",
      accentColor: "border-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Meus <span className="text-indigo-600 dark:text-indigo-400">Projectos</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore meus trabalhos mais recentes e as tecnologias utilizadas em cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 ${project.accentColor} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200`}></div>
              
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 group-hover:border-transparent">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${project.accentColor.replace('border', 'bg')}/20`}>
                        {project.technologies[0].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.slice(0, 2).map((tech, i) => (
                          <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-xs"
                      >
                        {tech.icon}
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Ver no GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;