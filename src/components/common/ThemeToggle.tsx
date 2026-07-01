import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme"
      className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--lime)] hover:border-[var(--lime)]/30 transition-colors duration-200">
      {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;