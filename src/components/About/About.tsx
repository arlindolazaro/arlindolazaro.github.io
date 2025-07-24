import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">SOBRE MIM</h2>
          <p className="text-gray-600 mb-6">
            Engenheiro de Software com 3 anos de experiência em desenvolvimento de sistemas completos, 
            incluindo APIs robustas e interfaces modernas.
          </p>
          <p className="text-gray-600">
            Especializado em tecnologias como Java, Spring Boot, React e JavaScript, com forte foco 
            na criação de soluções escaláveis e eficientes. Atualmente expandindo conhecimentos em 
            Machine Learning e Cybersecurity para aprimorar a segurança e inteligência das aplicações.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informações Pessoais</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Nome:</strong> Arlindo Lázaro Cau Júnior</li>
              <li><strong>Email:</strong> arlindolazaro202@gmail.com</li>
              <li><strong>Telefone:</strong> +258 86 530 4919</li>
              <li><strong>Endereço:</strong> 1110, Matola, Maputo, Moçambique</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Educação</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Licenciatura em Engenharia de Tecnologias e Sistemas de Informação</strong><br />
                Universidade Joaquim Chissano (Finalista)
              </li>
              <li>
                <strong>Sistemas Informáticos e Programação Web</strong><br />
                UNITEC Academy (Nota: 13 valores)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;