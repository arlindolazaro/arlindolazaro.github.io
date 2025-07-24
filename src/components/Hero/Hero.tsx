import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6">
      <div className="container mx-auto flex flex-col items-center justify-between min-h-[calc(100vh-5rem)] py-20">
        {/* Conteúdo Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            className="text-lg md:text-xl text-indigo-400 mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            OLÁ, EU SOU
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ARLINDO <span className="text-indigo-400">CAU</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Desenvolvedor Full-Stack
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Especializado em desenvolvimento de sistemas web com Java, Spring Boot e React.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTRATE-ME
            </motion.a>
            <motion.a
              href="/Arlindo_Cau_CV.pdf"
              download
              className="border-2 border-indigo-400 hover:bg-indigo-900/30 text-indigo-400 px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BAIXAR CV
            </motion.a>
          </div>
        </motion.div>

        {/* Botão "Saiba Mais" - Agora perfeitamente centralizado */}
        <motion.div
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="flex flex-col items-center group"
            aria-label="Scroll para próxima seção"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-gray-400 mb-3 group-hover:text-indigo-300 transition-colors">
              SAIBA MAIS
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-10 h-10 rounded-full border-2 border-gray-400 group-hover:border-indigo-400 flex items-center justify-center text-gray-300 group-hover:text-indigo-300 transition-colors"
            >
              <FaChevronDown className="text-lg" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;