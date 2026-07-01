import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../../../context/LanguageContext';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

export const HeroButtons = ({ isMounted }: { isMounted: boolean }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (!isMounted || isDownloading) return;

    setIsDownloading(true);

    const file =
      language === 'en'
        ? 'Arlindo_Lazaro_CV_EN.pdf'
        : 'Arlindo_Lazaro_CV.pdf';

    const a = document.createElement('a');
    a.href = `/documents/${file}`;
    a.download = file;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-white"
      >
        {t('hero.contactMe')}
        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>

      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:border-[var(--lime)] hover:text-[var(--lime)] disabled:opacity-50"
      >
        <FaDownload />
        {isDownloading
          ? t('hero.downloading')
          : t('hero.downloadCV')}
      </button>
    </div>
  );
};

export default HeroButtons;