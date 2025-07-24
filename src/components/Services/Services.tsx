import { motion } from 'framer-motion';

const services = [
  {
    title: "DESENVOLVIMENTO FULL-STACK",
    description: "Criação de aplicações web completas com front-end e back-end utilizando tecnologias modernas como React, Spring Boot e Java."
  },
  {
    title: "DESENVOLVIMENTO DE APIS",
    description: "Construção de APIs RESTful robustas e escaláveis com Spring Boot, garantindo alta performance e segurança."
  },
  {
    title: "UI/UX DESIGN",
    description: "Desenvolvimento de interfaces intuitivas e responsivas com React, TypeScript e bibliotecas modernas como Tailwind CSS."
  },
  {
    title: "CONSULTORIA EM TI",
    description: "Orientação técnica para projetos de software, arquitetura de sistemas e melhores práticas de desenvolvimento."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">MEUS SERVIÇOS</h2>
          <p className="text-gray-600">
            Soluções técnicas personalizadas para atender às necessidades específicas de cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-indigo-600 text-2xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;