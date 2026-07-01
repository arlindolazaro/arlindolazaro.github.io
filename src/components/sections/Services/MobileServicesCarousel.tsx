import { useCallback, useEffect, useRef, useState } from 'react';
import type { ServiceType } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';

interface Props {
  services: ServiceType[];
}

const MobileServicesCarousel = ({ services }: Props) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [focusMap, setFocusMap] = useState<number[]>(() => services.map((_, i) => (i === 0 ? 1 : 0)));

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    const child = el?.children[index] as HTMLElement | undefined;
    if (el && child) {
      el.scrollTo({
        left: child.offsetLeft - (el.clientWidth - child.clientWidth) / 2,
        behavior: 'smooth',
      });
      setCurrent(index);
    }
  };

  const updateFocus = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const next = Array.from(el.children).map((child) => {
      const c = child as HTMLElement;
      const childCenter = c.offsetLeft + c.offsetWidth / 2;
      const distance = Math.abs(center - childCenter) / el.clientWidth;
      return Math.max(0, 1 - distance * 1.5);
    });
    setFocusMap(next);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateFocus);
    };
    updateFocus();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [updateFocus]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      scrollToIndex((current + 1) % services.length);
    }, 3800);
    return () => clearInterval(id);
     
  }, [current, services.length, isPaused]);

  return (
    <div className="md:hidden relative mt-12 -mx-6">
      <div
        ref={carouselRef}
        onTouchStart={() => setIsPaused(true)}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pb-6"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map((service, i) => {
          const focus = focusMap[i] ?? 0;
          const scale = 0.88 + focus * 0.12;
          const opacity = 0.45 + focus * 0.55;
          return (
            <div
              key={i}
              className="snap-center shrink-0 w-[82vw] max-w-[320px] will-change-transform"
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
              }}
            >
              <ServiceCard service={service} index={i} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {services.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir para serviço ${idx + 1}`}
            onClick={() => {
              setIsPaused(true);
              scrollToIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? 'w-6 bg-[var(--lime)]' : 'w-1.5 bg-[var(--border)]'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileServicesCarousel;