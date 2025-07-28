import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from './experienceData';
import { ExperienceCard } from './ExperienceCard';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import experienceBg from '../../../assets/images/bg-paralax.jpg';

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Parallax background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img
          src={experienceBg}
          alt="Background profissional"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-indigo-900/10 dark:from-indigo-900/20 dark:to-indigo-900/40" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <SectionTitle>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Experiência Profissional
            </span>
          </SectionTitle>

          <AnimatedDivider />

          <p className="text-xl text-gray-600 dark:text-gray-300">
            Minha jornada profissional e conquistas mais relevantes.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto grid gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
