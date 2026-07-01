import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import certificatesData from '../../../data/CertificatesData';
import type { Certificate } from '../../../data/CertificatesData';
import CertificateCard from './CertificatesCard';

const Certificates = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Certificate | null>(null);

  const index = certificatesData.findIndex((c) => c.id === selected?.id);

  const go = (dir: 1 | -1) => {
    if (index === -1) return;
    const next = (index + dir + certificatesData.length) % certificatesData.length;
    setSelected(certificatesData[next]);
  };

  return (
    <section id="certificates" className="py-24 bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--lime)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center gap-4 mb-4">
          <motion.p
            className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            07 — {t('certificates.title')}
          </motion.p>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--lime)]/40 to-transparent" />
          <span className="text-[var(--muted)] text-xs font-mono">
            {String(certificatesData.length).padStart(2, '0')}
          </span>
        </div>

        <motion.h2
          className="text-4xl sm:text-6xl font-black text-[var(--text)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('certificates.title').split(' ')[0]}{' '}
          <span className="accent-italic">{t('certificates.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        <p className="text-[var(--muted)] mb-16 max-w-lg">{t('certificates.subtitle')}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {certificatesData.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <CertificateCard cert={cert} index={i} onSelect={() => setSelected(cert)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative max-w-3xl w-full bg-[var(--surface)] border border-[var(--lime)]/20 rounded-2xl p-4 sm:p-6 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex justify-between items-center mb-4 gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 text-[10px] font-mono text-black bg-[var(--lime)] rounded-full px-2 py-1">
                    {String(index + 1).padStart(2, '0')} / {String(certificatesData.length).padStart(2, '0')}
                  </span>
                  <h3 className="text-[var(--text)] font-bold truncate">{t(selected.titleKey)}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="shrink-0 w-8 h-8 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-black hover:bg-[var(--lime)] hover:border-[var(--lime)] transition-colors flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="relative">
                <img
                  src={selected.image}
                  alt={t(selected.titleKey)}
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />

                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--black)]/70 border border-[var(--border)] text-[var(--text)] hover:border-[var(--lime)] hover:text-[var(--lime)] transition-colors flex items-center justify-center"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Seguinte"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--black)]/70 border border-[var(--border)] text-[var(--text)] hover:border-[var(--lime)] hover:text-[var(--lime)] transition-colors flex items-center justify-center"
                >
                  ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;