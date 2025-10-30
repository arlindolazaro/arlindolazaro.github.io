import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

export const HeroButtons = ({ isMounted }: { isMounted: boolean }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    if (!isMounted || isDownloading) return;
    setIsDownloading(true);

    try {
      const pdfUrl = '/documents/Arlindo_Lazaro_CV.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Arlindo_Lazaro_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar CV:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
      <motion.a
        href="#contact"
        className="group w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-2xl font-medium text-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Fundo com gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] animate-gradient-x" />
        
        {/* Overlay de brilho */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
        
        {/* Efeito de borda brilhante */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-[-1px] bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 rounded-2xl opacity-30 blur-sm" />
        </div>

        <span className="relative z-10 text-white font-semibold tracking-wider text-sm">
          CONTACTAR-ME
        </span>
      </motion.a>

      <motion.button
        onClick={handleDownloadCV}
        disabled={isDownloading}
        className="group w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-2xl font-medium text-center"
        whileHover={!isDownloading ? { scale: 1.02 } : {}}
        whileTap={!isDownloading ? { scale: 0.98 } : {}}
      >
        {/* Fundo com efeito glassmorphism */}
        <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl" />
        
        {/* Gradiente sutil na borda */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50">
          <div className="absolute inset-0 rounded-2xl bg-gray-50 dark:bg-gray-900" />
        </div>

        {/* Efeito hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
        </div>

        <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
        {isDownloading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            BAIXANDO...
          </>
        ) : (
          <>
            <FaDownload className="text-lg text-indigo-500" />
            BAIXAR CV
          </>
        )}
            </span>
          </motion.button>
        </div>
      );
    };
