import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <FaMapMarkerAlt />, label: t('contact.location'), value: t('contact.locationValue') },
    { icon: <FaEnvelope />, label: t('contact.email'), value: 'arlindolazaro202@gmail.com' },
    { icon: <FaPhone />, label: t('contact.phone'), value: '+258 86 530 4919' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between gap-8"
    >
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--lime)]/10 border border-[var(--lime)]/20 flex items-center justify-center text-[var(--lime)] flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-[var(--muted)] text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        {[
          { href: 'https://www.linkedin.com/in/arlindo-lázaro-974932267/', icon: <FaLinkedin />, label: 'LinkedIn' },
          { href: 'https://github.com/arlindolazaro', icon: <FaGithub />, label: 'GitHub' },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
            className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--lime)] hover:border-[var(--lime)]/30 transition-colors duration-200">
            {s.icon}
          </a>
        ))}
      </div>

      {/* CTA box */}
      <div className="bg-[var(--lime)] rounded-2xl p-6">
        <p className="text-black font-black text-xl leading-tight">
          You've got the <span className="font-serif italic">ideas.</span><br />
          I've got the <span className="font-serif italic">skills.</span><br />
          Let's team up! 🌍
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;