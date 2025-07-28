// About.tsx
import { motion } from 'framer-motion';
import { AnimatedDivider } from '../../common/AnimatedDivider'; 
import { SectionTitle } from '../../common/SectionTitle';         
import { TECHNOLOGIES } from './aboutData';
import TechGrid from './TechGrid';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 scroll-mt-22"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <SectionTitle className="text-black dark:text-white">
          Sobre Mim
        </SectionTitle>

        <AnimatedDivider />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Sou um Desenvolvedor Web com mais de 3 anos de experiência em soluções de ponta a ponta — desde APIs robustas até interfaces modernas e responsivas.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Trabalho com tecnologias como PHP, TypeScript, Java, Spring Boot e React. 
            Atualmente, dedico-me também à área de Cibersegurança e Machine Learning.
          </p>
        </motion.div>

        <TechGrid technologies={TECHNOLOGIES} />
      </div>
    </section>
  );
};

export default About;
