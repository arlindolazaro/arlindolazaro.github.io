import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from './experienceData';
import { ExperienceCard } from './ExperienceCard';
import { staggerContainer } from '../../../lib/animations';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      id="experience"
      className="relative py-32 bg-black dark:bg-black overflow-hidden"
      ref={ref}
    >
      {/* Background elegante: transição de violet para neutral */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-b 
        from-violet-950/20 via-black to-neutral-950
        dark:from-violet-950/20 dark:via-black dark:to-neutral-950"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <SectionTitle>
            Experiência Profissional
          </SectionTitle>

          <AnimatedDivider />

          <p className="text-lg text-neutral-300 mt-6 leading-relaxed">
            Experiência prática em desenvolvimento de sistemas,
            alinhada às necessidades reais do negócio.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="max-w-5xl mx-auto grid gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
