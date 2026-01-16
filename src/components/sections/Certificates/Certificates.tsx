import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import certificatesData from './CertificatesInfo';
import type { Certificate } from './CertificatesInfo';
import CertificateCard from './CertificatesCard';
import { AnimatedDivider } from '../../common/AnimatedDivider';

/* =======================
   SECTION
======================= */

const Certificates = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-32 sm:py-40 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-violet-950/15" />
        <div className="absolute -top-80 -left-80 w-[700px] h-[700px] bg-indigo-500/8 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-600/8 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Certificações
          </h2>
          <AnimatedDivider />
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-neutral-300">
            Formação contínua, especializações técnicas e validações profissionais.
          </p>
        </motion.div>

        {/* Desktop / Tablet Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <CertificateCard
                cert={cert}
                onSelect={() => setSelected(cert)}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel
            certificates={certificatesData}
            onSelect={setSelected}
          />
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
              max-w-3xl w-full
              bg-black/80 backdrop-blur-2xl
              border border-neutral-800
              rounded-2xl p-4 sm:p-6
            "
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base sm:text-lg text-white">
                {selected.title}
              </h3>
              <button
                onClick={() => setSelected(null)}
                className="text-neutral-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <img
              src={selected.image}
              alt={selected.alt}
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;

/* =======================
   MOBILE CAROUSEL
======================= */

const MobileCarousel = ({
  certificates,
  onSelect,
}: {
  certificates: Certificate[];
  onSelect: (c: Certificate) => void;
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = certificates.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  /* Auto-play */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, total]);

  return (
    <div className="relative space-y-6">
      {/* Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={() => setPaused(true)}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
            setPaused(false);
          }}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="min-w-full px-3">
              <CertificateCard
                cert={cert}
                onSelect={() => onSelect(cert)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2">
        {certificates.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            animate={{
              width: i === index ? 28 : 8,
              opacity: i === index ? 1 : 0.4,
            }}
            className={`h-2 rounded-full ${
              i === index
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center text-xs text-neutral-400">
        {index + 1} / {total}
      </div>
    </div>
  );
};
