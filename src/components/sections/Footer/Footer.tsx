import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const NAV_KEYS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#servicos' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--surface)] border-t border-[var(--border)] overflow-hidden">
      {/* Grid pattern — ecoa a hero */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--lime)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA principal */}
        <div className="py-16 border-b border-[var(--border)]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-3">
                {t('contact.title')}
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-xl">
                {t('contact.subtitle')}
              </h2>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-[var(--lime)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black hover:bg-white transition-colors duration-200 w-fit"
            >
              {t('hero.contactMe')}
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Colunas */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--lime)] rounded-md flex items-center justify-center">
                <span className="text-black font-black text-xs">AC</span>
              </div>
              <span className="text-white font-bold text-sm">Arlindo Cau</span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-[200px]">
              {t('hero.role')} — Full-Stack
            </p>
          </div>

          <div>
            <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-4">
              {t('nav.home')}
            </h4>
            <ul className="space-y-3">
              {NAV_KEYS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-[var(--muted)] text-sm hover:text-[var(--lime)] transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        <div>
          <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-4">
            {t('contact.email')}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="text-[var(--muted)]">{t('contact.locationValue')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-4">
            Social
          </h4>
          <SocialLinks />
        </div>
      </div>

      {/* Linha final */}
      <div className="py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--muted)] text-xs">
          © {new Date().getFullYear()} Arlindo Cau — {t('footer.rights')}
        </p>

        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          aria-label="Voltar ao topo"
          className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--lime)] text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          {t('hero.role') && 'Topo'}
          <span className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--lime)]/40 transition-colors">
            <FaArrowUp className="text-[10px]" />
          </span>
        </motion.button>
      </div>
    </div>
    </footer >
  );
};

export default Footer;