import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillsCarousel from './SkillsCarousel';
import {AnimatedDivider} from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';

export const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-40 bg-black overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-violet-950/20" />
        <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-indigo-500/8 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-600/8 blur-[200px] rounded-full" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
          <AnimatedDivider />
          <p className="mt-6 text-xl text-neutral-300">
            Tecnologias aplicadas em sistemas modernos, seguros e escaláveis.
          </p>
        </motion.div>

        <SkillsCarousel />
      </div>
    </section>
  );
};

export default Skills;
