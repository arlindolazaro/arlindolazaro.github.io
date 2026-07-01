import { useEffect, useRef, useState } from 'react';
import { Home } from './pages/Home';
import Preloader from './components/common/Preloader';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PRELOADER_DURATION_MS } from './lib/constants';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef<number | null>(null);
  const remainingRef = useRef<number | null>(null);
  const exitRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = performance.now();

    const clearAll = () => {
      if (remainingRef.current) clearTimeout(remainingRef.current);
      if (exitRef.current) clearTimeout(exitRef.current);
    };

    const triggerExit = () => {
      const elapsed = performance.now() - (startRef.current ?? 0);
      const remaining = Math.max(0, PRELOADER_DURATION_MS - elapsed);
      remainingRef.current = window.setTimeout(() => {
        setExiting(true);
        exitRef.current = window.setTimeout(() => setLoading(false), 420);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      triggerExit();
      return clearAll;
    }

    const onLoad = () => { window.removeEventListener('load', onLoad); triggerExit(); };
    window.addEventListener('load', onLoad);
    const fallback = window.setTimeout(triggerExit, PRELOADER_DURATION_MS + 1000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearAll();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {loading ? <Preloader exiting={exiting} /> : <Home />}
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;