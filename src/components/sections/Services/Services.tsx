import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ServiceType } from './servicesData';
import { staggerContainer } from '../../../lib/animations';
import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <motion.section
      id="servicos"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionTitle className="text-gray-900 dark:text-white">
            Serviços Profissionais
          </SectionTitle>

          <AnimatedDivider />

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Soluções técnicas personalizadas para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        {/* Grid para desktop */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.12 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Carousel para mobile: autoplay, teclado, indicadores e pause on hover/focus */}
        <MobileServicesCarousel services={services} />
      </div>
    </motion.section>
  );
};

// --- Mobile carousel component (autoplay, keyboard, indicators) ---
const MobileServicesCarousel = ({ services }: { services: ServiceType[] }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    const child = el?.children[index] as HTMLElement | undefined;
    if (el && child) {
      const scrollLeft =
        child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
      el.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setCurrent(index);
    }
  };

  // autoplay
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      if (pausedRef.current || services.length <= 1) return;
      const next = (current + 1) % services.length;
      scrollToIndex(next);
    }, 3000);
    return () => clearInterval(autoplayRef.current!);
  }, [current, services.length]);

  // pause on hover/focus
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') scrollToIndex((current + 1) % services.length);
    if (e.key === 'ArrowLeft')
      scrollToIndex((current - 1 + services.length) % services.length);
  };

  return (
    <div className="md:hidden relative">
      <div
        id="services-carousel"
        ref={carouselRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Serviços"
        onKeyDown={handleKeyDown}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory touch-pan-x pb-10 px-4 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="snap-center min-w-[90%] sm:min-w-[75%] md:min-w-[60%] flex-shrink-0"
            tabIndex={0}
            aria-hidden={false}
            onFocus={() => scrollToIndex(idx)}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {/* Live region para acessibilidade */}
      <div className="sr-only" aria-live="polite">
        Slide {current + 1} de {services.length}: {services[current]?.title}
      </div>

      {/* Indicadores */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all duration-300 ${
              current === idx
                ? 'w-6 h-2 rounded-full bg-indigo-600'
                : 'w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


export default Services;
