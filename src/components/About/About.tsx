import { motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

// Constantes para evitar repetição e facilitar manutenção
const SECTION_ID = 'about';
const SECTION_CLASSES = 'py-24 bg-white scroll-mt-22';
const TITLE_CLASSES = 'text-4xl md:text-5xl font-extrabold text-black text-center mb-4';
const DIVIDER_CLASSES = 'h-1 w-24 bg-indigo-500 mx-auto mb-10 rounded-full';
const DESCRIPTION_CLASSES = 'text-gray-700 text-lg leading-relaxed';
const TECH_GRID_CLASSES = 'mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center';
const TECH_ITEM_CLASSES = 'flex flex-col items-center gap-2 hover:scale-105 transition-transform';
const TECH_ICON_CLASSES = 'text-4xl';
const TECH_NAME_CLASSES = 'text-sm text-gray-600';

// Dados das tecnologias separados para melhor organização
const TECHNOLOGIES = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
  { name: 'PHP', icon: <FaPhp className="text-purple-700" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-gray-600" /> },
];

// Animations config
const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const contentAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const techGridAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const About = () => {
  return (
    <section id={SECTION_ID} className={SECTION_CLASSES}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Título com animação */}
        <motion.h2
          {...titleAnimation}
          className={TITLE_CLASSES}
        >
          Sobre Mim
        </motion.h2>

        <div className={DIVIDER_CLASSES} />

        {/* Texto de Apresentação */}
        <motion.div
          {...contentAnimation}
          className="text-center max-w-2xl"
        >
          <p className={`${DESCRIPTION_CLASSES} mb-4`}>
            Sou um Desenvolvedor Web com mais de 3 anos de experiência em soluções de ponta a ponta — desde APIs robustas até interfaces modernas e responsivas.
          </p>
          <p className={DESCRIPTION_CLASSES}>
            Trabalho com tecnologias como PHP, TypeScript, Java, Spring Boot e React. Atualmente, dedico-me também à área de Cibersegurança e Machine Learning.
          </p>
        </motion.div>

        {/* Grid de Tecnologias */}
        <motion.div
          {...techGridAnimation}
          className={TECH_GRID_CLASSES}
        >
          {TECHNOLOGIES.map((tech, index) => (
            <div key={index} className={TECH_ITEM_CLASSES}>
              <div className={TECH_ICON_CLASSES}>{tech.icon}</div>
              <span className={TECH_NAME_CLASSES}>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;