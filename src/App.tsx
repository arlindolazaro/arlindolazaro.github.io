import { useEffect, useRef, useState } from 'react';
import { Home } from './pages/Home';
import Preloader from './components/common/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  const startRef = useRef<number | null>(null);
  const remainingTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const minVisibleMs = 5000; // 5 segundos mínimo
    startRef.current = performance.now();

    const clearAll = () => {
      if (remainingTimerRef.current) {
        clearTimeout(remainingTimerRef.current);
        remainingTimerRef.current = null;
      }
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };

    const triggerExit = () => {
      const now = performance.now();
      const elapsed = startRef.current != null ? now - startRef.current : minVisibleMs;
      const remaining = Math.max(0, minVisibleMs - elapsed);

      remainingTimerRef.current = window.setTimeout(() => {
        setExiting(true);
        exitTimerRef.current = window.setTimeout(() => {
          setLoading(false);
        }, 420);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      triggerExit();
      return () => clearAll();
    }

    const onLoad = () => {
      window.removeEventListener('load', onLoad);
      triggerExit();
    };

    window.addEventListener('load', onLoad);

    // Fallback: garante saída após minVisibleMs + margem caso 'load' nunca ocorra
    const fallbackId = window.setTimeout(() => {
      triggerExit();
    }, minVisibleMs + 1000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearAll();
      clearTimeout(fallbackId);
    };
  }, []);

  if (loading) return <Preloader exiting={exiting} />;
  return <Home />;
};

export default App;