import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExpand } from 'react-icons/fa';
import type { Certificate } from '../../../data/CertificatesData';

const CertificateCard = ({
  cert,
  index,
  onSelect,
}: {
  cert: Certificate;
  index: number;
  onSelect: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative cursor-pointer bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden
                 hover:border-[var(--lime)]/50 transition-colors duration-300
                 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]"
    >
      <span className="absolute top-2 left-2 z-10 text-[9px] font-mono text-[var(--lime)] bg-[var(--black)]/70 border border-[var(--lime)]/20 rounded-full px-2 py-0.5">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative h-40 sm:h-48 bg-[var(--surface)] flex items-center justify-center overflow-hidden">
        <img
          src={cert.image}
          alt={t(cert.titleKey)}
          loading="lazy"
          className="max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Overlay escuro intencional — mantém legibilidade do botão "Ver" em ambos os temas */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                       transition-all duration-300 flex items-center gap-2
                       bg-[var(--lime)] text-black text-[11px] font-semibold uppercase tracking-wide
                       px-3 py-1.5 rounded-full"
          >
            <FaExpand className="text-[10px]" />
            {t('certificates.view')}
          </span>
        </div>
      </div>

      <div className="p-3 border-t border-[var(--border)] group-hover:border-[var(--lime)]/20 transition-colors duration-300">
        <p className="text-xs text-[var(--muted)] group-hover:text-[var(--text)] leading-snug line-clamp-2 transition-colors duration-300">
          {t(cert.titleKey)}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;