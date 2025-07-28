import { motion } from 'framer-motion';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <motion.section
      id="servicos"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionTitle className="text-gray-900 dark:text-white">
            Serviços Profissionais
          </SectionTitle>

          <AnimatedDivider />

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Soluções técnicas personalizadas para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
