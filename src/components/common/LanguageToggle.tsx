import { useLanguageContext } from '../../context/LanguageContext';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguageContext();
    return (
        <button onClick={toggleLanguage} aria-label="Toggle language"
            className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--muted)] hover:text-[var(--lime)] hover:border-[var(--lime)]/30 transition-colors duration-200">
            {language.toUpperCase()}
        </button>
    );
};

export default LanguageToggle;