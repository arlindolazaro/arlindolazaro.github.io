import { motion } from 'framer-motion';
import { staggerContainer } from '../../../lib/animations';
import { SectionTitle } from '../../common/SectionTitle';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';
import MobileServicesCarousel from './MobileServicesCarousel';

const Services = () => {
  return (
    <motion.section
      id="servicos"
      className="relative py-24 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-indigo-950/20" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionTitle>
            Serviços Profissionais
          </SectionTitle>
          <AnimatedDivider />
          <p className="text-neutral-300 text-base sm:text-lg mt-6">
            Soluções técnicas modernas, escaláveis e orientadas a resultados.
          </p>
        </div>

        {/* Desktop / Tablet Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileServicesCarousel services={services} />
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
