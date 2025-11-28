import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle';
import { AnimatedDivider } from '../../common/AnimatedDivider';

import certificatesData from './CertificatesInfo';
import type { Certificate } from './CertificatesInfo';
import CertificateCard from './CertificatesCard';

const Certificates: React.FC = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <motion.section
      id="certificates"
      className="py-20 bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionTitle className="text-gray-900 dark:text-white">Certificados</SectionTitle>
          <AnimatedDivider />
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Conquistas acadêmicas e certificações profissionais
          </p>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CertificateCard cert={cert} onSelect={() => setSelected(cert)} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <CertificatesCarousel certificates={certificatesData} onSelect={setSelected} />
        </div>
      </div>

      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </motion.section>
  );
};

// ...existing code...

// Carousel Component for Mobile
const CertificatesCarousel: React.FC<{
  certificates: Certificate[];
  onSelect: (cert: Certificate) => void;
}> = ({ certificates, onSelect }) => {
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

  // Sync current index on manual scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let minDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const childCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setCurrent(nearest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      if (pausedRef.current || certificates.length <= 1) return;
      const next = (current + 1) % certificates.length;
      scrollToIndex(next);
    }, 4000);
    return () => clearInterval(autoplayRef.current!);
  }, [current, certificates.length]);

  // Pause on hover/focus
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
    if (e.key === 'ArrowRight') scrollToIndex((current + 1) % certificates.length);
    if (e.key === 'ArrowLeft')
      scrollToIndex((current - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Certificados"
        onKeyDown={handleKeyDown}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory touch-pan-x pb-6 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {certificates.map((cert, idx) => (
          <div
            key={cert.id}
            className="snap-center min-w-[85%] flex-shrink-0"
            tabIndex={0}
            onFocus={() => scrollToIndex(idx)}
          >
            <div
              onClick={() => {
                scrollToIndex(idx);
                onSelect(cert);
              }}
            >
              <CertificateCard cert={cert} onSelect={() => onSelect(cert)} />
            </div>
          </div>
        ))}
      </div>

      {/* Live region para acessibilidade */}
      <div className="sr-only" aria-live="polite">
        Slide {current + 1} de {certificates.length}: {certificates[current]?.title}
      </div>

      {/* Indicadores */}
      <div className="flex items-center gap-2 justify-center mt-4">
        {certificates.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              current === idx
                ? 'w-3 h-3 bg-blue-600'
                : 'w-2 h-2 bg-gray-400 dark:bg-gray-600'
            }`}
            aria-label={`Ir para certificado ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Modal Component (sem link de documento)
const CertificateModal: React.FC<{
  cert: Certificate;
  onClose: () => void;
}> = ({ cert, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
        >
          ✕
        </button>
      </div>
      <motion.img
        src={cert.image}
        alt={cert.alt}
        loading="lazy"
        className="w-full h-auto rounded-lg object-contain max-h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Fechar
        </button>
      </div>
    </motion.div>
  </motion.div>
);

export default Certificates;
