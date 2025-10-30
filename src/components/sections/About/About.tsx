// About.tsx
import { motion } from 'framer-motion';
import { AnimatedDivider } from '../../common/AnimatedDivider'; 
import { SectionTitle } from '../../common/SectionTitle';         
import { TECHNOLOGIES } from './aboutData';
import TechGrid from './TechGrid';
import CountUp from '../../common/CountUp';

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
          className="text-center max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Sou um Desenvolvedor Web com mais de 3 anos de experiência em soluções de ponta a ponta — desde APIs robustas até interfaces modernas e responsivas.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Trabalho com tecnologias como PHP, TypeScript, Java, Spring Boot e React. Actualmente, dedico-me também à área de Cibersegurança e Machine Learning.
              </p>

              <div className="flex gap-4 flex-wrap">
                <div className="px-4 py-3 rounded-xl glass-morph shadow-smooth text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    <CountUp end={3} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Anos de Experiência</div>
                </div>
                <div className="px-4 py-3 rounded-xl glass-morph shadow-smooth text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projectos Entregues</div>
                </div>
                <div className="px-4 py-3 rounded-xl glass-morph shadow-smooth text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    <CountUp end={8} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Clientes</div>
                </div>
              </div>

              {/* CTAs centralizados no Hero para evitar duplicidade */}
              <div className="mt-6" />
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md p-6 rounded-2xl glass-morph shadow-3d">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">O que eu entrego</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>- Aplicações web escaláveis com testes e deployment</li>
                  <li>- APIs seguras e bem documentadas</li>
                  <li>- Interfaces com foco em usabilidade e performance</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <TechGrid technologies={TECHNOLOGIES} />
      </div>
    </section>
  );
};

export default About;
