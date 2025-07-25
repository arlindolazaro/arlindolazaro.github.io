import { motion } from 'framer-motion';
import { FaCode, FaCogs, FaPaintBrush, FaLightbulb } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    title: "Desenvolvimento Full-Stack",
    description:
      "Criação de aplicações web completas com front-end e back-end utilizando tecnologias modernas como React, Spring Boot e Java.",
    icon: <FaCode className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "Desenvolvimento de APIs",
    description:
      "Construção de APIs RESTful robustas e escaláveis com Spring Boot, garantindo alta performance e segurança.",
    icon: <FaCogs className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Desenvolvimento de interfaces intuitivas e responsivas com React, TypeScript e bibliotecas modernas como Tailwind CSS.",
    icon: <FaPaintBrush className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "Consultoria em TI",
    description:
      "Orientação técnica para projetos de software, arquitetura de sistemas e melhores práticas de desenvolvimento.",
    icon: <FaLightbulb className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 80, damping: 12, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-200"
  >
    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 shadow-inner">
      {service.icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-gray-600 text-sm">{service.description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Serviços Profissionais
          </h2>
          <div className="h-1 w-24 bg-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-lg">
            Soluções técnicas personalizadas para atender às necessidades específicas de cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
