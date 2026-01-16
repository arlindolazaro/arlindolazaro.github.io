import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { education } from './educationData';
import { SectionTitle } from '../../common/SectionTitle';
import EducationCard from './EducationCard';
import { AnimatedDivider } from '../../common/AnimatedDivider';

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-28 sm:py-40 overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-violet-950/10" />
        <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-indigo-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 sm:mb-32"
        >
          <SectionTitle>
            Educação & Formação
          </SectionTitle>
          <AnimatedDivider />
          <p className="mt-8 sm:mt-10 text-base sm:text-xl text-neutral-300 leading-relaxed">
            Base técnica sólida para construir soluções modernas,
            escaláveis e orientadas ao futuro.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <EducationCard education={edu} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
