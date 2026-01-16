/* eslint-disable no-empty */
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const STORAGE_KEY = 'arlindo_theme';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const val = localStorage.getItem(STORAGE_KEY);
        if (val) return val === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const setTheme = () => {
      if (!root) return;
      if (isDark) {
        root.classList.add('dark');
        try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch {}
      } else {
        root.classList.remove('dark');
        try { localStorage.setItem(STORAGE_KEY, 'light'); } catch {}
      }
    };
    setTheme();
  }, [isDark]);

  // Keep multiple ThemeToggle instances in sync within the same page and across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        try {
          setIsDark(e.newValue === 'dark');
        } catch {}
      }
    };

    const onCustom = (e: Event) => {
      // custom event with detail boolean
      const ev = e as CustomEvent<boolean>;
      if (typeof ev.detail === 'boolean') setIsDark(ev.detail);
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('theme-change', onCustom as EventListener);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('theme-change', onCustom as EventListener);
    };
  }, []);

  return (
    <button
      onClick={() => {
        const next = !isDark;
        setIsDark(next);
        // notify other instances in the same document
        try { window.dispatchEvent(new CustomEvent('theme-change', { detail: next })); } catch {}
      }}
      aria-label="Alternar tema claro/escuro"
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
    >
      <div className="relative z-10 transform transition-transform duration-500">
        {isDark ? (
          <FaSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <FaMoon className="w-5 h-5 text-indigo-600" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-200" />
    </button>
  );
};

export default ThemeToggle;
