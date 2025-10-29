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
    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
      <motion.a
        href="#contact"
        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-center btn-smooth"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        CONTACTAR-ME
      </motion.a>

      <motion.button
        onClick={handleDownloadCV}
        disabled={isDownloading}
        className={`w-full sm:w-auto border-2 border-indigo-400 ${
          isDownloading ? 'bg-indigo-900/20' : 'hover:bg-indigo-900/20'
        } text-indigo-400 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 btn-smooth`}
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
  );
};

export default HeroButtons;