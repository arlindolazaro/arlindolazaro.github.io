import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[var(--lime)] rounded-md flex items-center justify-center">
            <span className="text-black font-black text-xs">AC</span>
          </div>
          <span className="text-white/60 text-sm">Arlindo Cau · Software Developer</span>
        </div>
        <SocialLinks />
        <p className="text-[var(--muted)] text-xs">
          © {new Date().getFullYear()} — {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;