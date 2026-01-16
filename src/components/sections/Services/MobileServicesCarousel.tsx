import { useEffect, useRef, useState } from 'react';
import type { ServiceType } from './servicesData';
import ServiceCard from './ServiceCard';

interface Props {
  services: ServiceType[];
}

const MobileServicesCarousel = ({ services }: Props) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);

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

  useEffect(() => {
    const id = setInterval(() => {
      scrollToIndex((current + 1) % services.length);
    }, 3500);

    return () => clearInterval(id);
  }, [current, services.length]);

  return (
    <div className="md:hidden relative mt-12">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-12"
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="snap-center min-w-[88%] flex-shrink-0"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              current === idx ? 'w-6 bg-indigo-500' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
