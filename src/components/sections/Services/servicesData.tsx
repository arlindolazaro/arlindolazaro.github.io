import { FaCode, FaCogs, FaPaintBrush, FaLightbulb } from 'react-icons/fa';
import type { ReactNode } from 'react';

export type ServiceType = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass =
  'text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110';

export const services: ServiceType[] = [
  {
    title: 'Desenvolvimento Full-Stack',
    description:
      'Aplicações web completas com foco em performance, escalabilidade e boas práticas modernas.',
    icon: <FaCode className={iconClass} />,
  },
  {
    title: 'APIs & Back-end',
    description:
      'APIs REST robustas, seguras e escaláveis com arquiteturas bem definidas.',
    icon: <FaCogs className={iconClass} />,
  },
  {
    title: 'UI / UX Engineering',
    description:
      'Interfaces modernas, acessíveis e altamente responsivas com foco na experiência.',
    icon: <FaPaintBrush className={iconClass} />,
  },
  {
    title: 'Consultoria Técnica',
    description:
      'Apoio estratégico em decisões técnicas, arquitetura e evolução de produto.',
    icon: <FaLightbulb className={iconClass} />,
  },
];
