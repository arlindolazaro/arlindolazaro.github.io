// HeroButtons.tsx
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

export const HeroButtons = ({ isMounted }: { isMounted: boolean }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    if (!isMounted || isDownloading) return;
    setIsDownloading(true);

    try {
      const link = document.createElement('a');
      link.href = '/documents/Arlindo_Lazaro_CV.pdf';
      link.download = 'Arlindo_Lazaro_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
      {/* CONTACTO */}
      <motion.a
        href="#contact"
        className="
          relative px-8 py-4 rounded-2xl
          bg-gradient-to-r from-indigo-600 to-indigo-700
          text-white font-semibold text-sm tracking-wider
          shadow-lg
        "
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        CONTACTAR-ME
      </motion.a>

      {/* DOWNLOAD CV */}
      <motion.button
        onClick={handleDownloadCV}
        disabled={isDownloading}
        className="
          relative px-8 py-4 rounded-2xl
          bg-white/5 border border-white/10
          backdrop-blur
          font-semibold text-sm
          text-indigo-400
          flex items-center justify-center gap-3
        "
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {isDownloading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            BAIXANDO...
          </>
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
