// About.tsx
import { motion } from 'framer-motion';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import { TECHNOLOGIES } from './aboutData';
import TechCarousel from './TechCarousel';
import CountUp from '../../common/CountUp';

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-20 sm:py-28
        bg-black dark:bg-black
        text-white dark:text-white
        scroll-mt-22
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* Gradiente elegante: transição suave de Hero para próxima section */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/25 via-black to-neutral-950/30 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        <SectionTitle>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Texto */}
            <div className="text-center md:text-left">
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
              Sou um Desenvolvedor Web com mais de 3 anos de experiência no
              desenvolvimento de soluções completas, desde APIs robustas até
              interfaces modernas e responsivas.
              </p>

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Trabalho com PHP, TypeScript, Java, Spring Boot e React.
              Actualmente, aprofundo conhecimentos em Cibersegurança e
              Machine Learning.
              </p>

              <div className="flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
              <StatCard label="Anos de Experiência" value={3} />
              <StatCard label="Projectos Entregues" value={15} />
              <StatCard label="Clientes" value={8} />
              </div>
            </div>

            {/* Card lateral */}
            <div className="flex items-center justify-center">
              <div className="
                w-full max-w-md
                p-5 sm:p-6
                rounded-2xl
                bg-white/5 dark:bg-white/5
                backdrop-blur
                border border-white/10 dark:border-white/10
                shadow-2xl
                transition-all duration-300
              ">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                  O que eu entrego
                </h4>
                <ul className="text-neutral-300 space-y-2 text-sm sm:text-base">
                  <li>• Aplicações web escaláveis e seguras</li>
                  <li>• APIs bem documentadas e testadas</li>
                  <li>• Interfaces focadas em usabilidade e performance</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tecnologias */}
        <TechCarousel technologies={TECHNOLOGIES} />
      </div>
    </section>
  );
};

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <div
    className="
      px-3 sm:px-5 py-3 sm:py-4
      rounded-xl
      bg-white/5 dark:bg-white/5
      border border-white/10 dark:border-white/10
      text-center
      backdrop-blur
      transition-all duration-300 text-xs sm:text-sm
    "
  >
    <div className="text-xl sm:text-2xl font-bold text-indigo-400">
      <CountUp end={value} suffix="+" />
    </div>
    <div className="text-xs sm:text-sm text-neutral-400">{label}</div>
  </div>
);

export default About;
