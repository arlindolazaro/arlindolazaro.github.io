import { motion } from 'framer-motion';
import type { EducationItem } from './educationData';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface Props {
  education: EducationItem;
}

const statusLabel = {
  completed: 'CONCLUÍDO',
  'in-progress': 'EM PROGRESSO',
  ongoing: 'CONTÍNUO',
};

const EducationCard = ({ education }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 180 }}
      className="relative group"
    >
      {/* Neon border */}
      <div
        className="
          absolute -inset-[1px] rounded-[28px]
          bg-gradient-to-r from-indigo-500/40 via-indigo-400/40 to-indigo-500/40
          opacity-0 group-hover:opacity-100 blur-xl transition duration-700
        "
      />

      <div
        className="
          relative rounded-[28px]
          p-6 sm:p-8 md:p-12
          bg-black/70 backdrop-blur-2xl
          border border-neutral-800
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
        "
      >
        {/* Header */}
        <div
          className="
            flex flex-col items-center text-center
            md:flex-row md:items-center md:text-left
            gap-6 md:gap-8 mb-8 md:mb-10
          "
        >
          <img
            src={education.logo}
            alt={education.institution}
            className="
              w-14 h-14 sm:w-16 sm:h-16
              rounded-xl object-cover
              border border-neutral-700
            "
          />

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white">
              {education.degree}
            </h3>
            <p className="text-neutral-400 mt-1 text-sm sm:text-base">
              {education.institution}
            </p>
          </div>

          <span
            className="
              px-4 py-2
              rounded-full
              text-[10px] sm:text-xs
              font-semibold tracking-widest
              text-cyan-200
              border border-cyan-500/50
              bg-cyan-500/20
            "
          >
            {statusLabel[education.status]}
          </span>
        </div>

        {/* Meta */}
        <div
          className="
            flex flex-col items-center text-center
            sm:flex-row sm:justify-center
            md:justify-start md:text-left
            gap-4 sm:gap-8
            text-xs sm:text-sm
            text-neutral-300
            mb-6 md:mb-8
          "
        >
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{education.location}</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            text-neutral-200
            text-sm sm:text-base md:text-lg
            leading-relaxed
            text-center md:text-left
            max-w-3xl mx-auto md:mx-0
            mb-8 md:mb-10
          "
        >
          {education.description}
        </p>

        {/* Focus */}
        {education.focus && (
          <div
            className="
              flex flex-wrap
              justify-center md:justify-start
              gap-3 sm:gap-4
            "
          >
            {education.focus.map((item, idx) => (
              <span
                key={idx}
                className="
                  px-4 py-2
                  rounded-full
                  text-[10px] sm:text-xs
                  uppercase tracking-wider
                  text-neutral-200
                  border border-neutral-600
                  bg-neutral-800/80
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
