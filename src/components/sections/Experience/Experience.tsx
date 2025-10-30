import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from './experienceData';
import { ExperienceCard } from './ExperienceCard';
import { staggerContainer } from '../../../lib/animations';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import experienceBg from '../../../assets/images/bg-paralax.webp';

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
      className="relative py-32 overflow-hidden"
    >
      {/* Background com efeito Glassmorphism e Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img
          src={experienceBg}
          alt="Background profissional"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-15 dark:opacity-10 filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-800/95 backdrop-blur-sm" />
        {/* Padrões geométricos animados */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SectionTitle>

                Experiência Profissional
                <motion.span
                  className="absolute inset-0 blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Experiência Profissional
                </motion.span>

            </SectionTitle>
          </motion.div>

          <AnimatedDivider />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed"
          >
            Minha jornada profissional e conquistas mais relevantes.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto grid gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.12 }}
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
