import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item = ({ icon, title, value }: any) => (
  <div className="flex gap-3 sm:gap-4 items-start">
    <div className="w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center rounded-xl
                    bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 flex-shrink-0 transition-all duration-300">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-white dark:text-white font-semibold text-sm sm:text-base">{title}</h4>
      <p className="text-neutral-400 dark:text-neutral-400 text-xs sm:text-sm">{value}</p>
    </div>
  </div>
);

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-black/70 dark:bg-black/70 border border-white/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 transition-all duration-300"
  >
    <Item icon={<FaMapMarkerAlt />} title="Localização" value="Matola, Maputo · Moçambique" />
    <Item icon={<FaEnvelope />} title="Email" value="arlindolazaro202@gmail.com" />
    <Item icon={<FaPhone />} title="Telefone" value="+258 86 530 4919" />

    <div className="flex gap-4 sm:gap-5 pt-4">
      {[ 
        { href: 'https://linkedin.com', icon: <FaLinkedin /> },
        { href: 'https://github.com/arlindolazaro', icon: <FaGithub /> }
      ].map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          className="text-neutral-400 dark:text-neutral-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-lg sm:text-xl"
          aria-label="Social link"
        >
          {s.icon}
        </a>
      ))}
    </div>
  </motion.div>
);

export default ContactInfo;
