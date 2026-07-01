import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountUp from '../../common/CountUp';
import TechCarousel from './TechCarousel';
import { TECHNOLOGIES } from '../../../data/aboutData';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-[var(--black)] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-[var(--lime)] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          01 — {t('about.title')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          {/* BIG TEXT */}
          <motion.div
            className="md:col-span-8 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-6 text-[var(--text)]">
              {t('about.paragraph1').split(' ').slice(0, 6).join(' ')}{' '}
              <span className="accent-italic">{t('about.paragraph1').split(' ').slice(6, 10).join(' ')}</span>
              {' '}{t('about.paragraph1').split(' ').slice(10).join(' ')}
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed">
              {t('about.paragraph2')}
            </p>
          </motion.div>

          {/* STATS */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {[
              { value: 3, label: t('about.statsExperience') },
              { value: 15, label: t('about.statsProjects') },
              { value: 8, label: t('about.statsClients') },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-[var(--lime)]">
                  <CountUp end={s.value} suffix="+" />
                </div>
                <div className="text-[var(--muted)] text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* DELIVER CARD — mantém-se lime sólido em ambos os temas, funciona como acento */}
          <motion.div
            className="md:col-span-5 bg-[var(--lime)] rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-black font-black text-xl mb-4">{t('about.deliverTitle')}</h3>
            <ul className="space-y-3">
              {[t('about.deliver1'), t('about.deliver2'), t('about.deliver3')].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-black/80 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LOCATION CARD */}
          <motion.div
            className="md:col-span-7 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-4">Localização</p>
            <p className="text-4xl sm:text-5xl font-black text-[var(--text)] leading-none">
              Maputo,<br />
              <span className="accent-italic">Moçambique</span>
            </p>
            <p className="text-[var(--muted)] text-sm mt-4">Disponível para trabalho remoto global</p>
          </motion.div>
        </div>

        <TechCarousel technologies={TECHNOLOGIES} />
      </div>
    </section>
  );
};

export default About;