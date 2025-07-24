import { motion } from 'framer-motion';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    if (!isMounted || isDownloading) return;

    setIsDownloading(true);
    
    try {
      // Solução com fallback para diferentes cenários
      const pdfUrl = '/documents/Arlindo_Cau_CV.pdf';
      
      // Método 1: Tentativa com anchor tag
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Arlindo_Cau_CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback para mobile/alguns navegadores
      setTimeout(() => {
        if (!document.querySelector('iframe[src*="Arlindo_Cau_CV.pdf"]')) {
          window.open(pdfUrl, '_blank');
        }
      }, 200);
    } catch (error) {
      console.error('Erro ao baixar CV:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTRATE-ME
            </motion.a>
            
            <motion.button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`border-2 border-indigo-400 ${isDownloading ? 'bg-indigo-900/20' : 'hover:bg-indigo-900/20'} text-indigo-400 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}
              whileHover={!isDownloading ? { scale: 1.05 } : {}}
              whileTap={!isDownloading ? { scale: 0.95 } : {}}
            >
              {isDownloading ? (
                'BAIXANDO...'
              ) : (
                <>
                  <FaDownload />
                  BAIXAR CV
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Botão "Saiba Mais" */}
        <motion.div
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="flex flex-col items-center group focus:outline-none"
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