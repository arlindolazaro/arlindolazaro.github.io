import { FaCode, FaCogs, FaPaintBrush, FaLightbulb, FaMobileAlt, FaServer } from 'react-icons/fa';
import type { ReactNode } from 'react';

export type ServiceType = {
  titleKey: string;
  descriptionKey: string;
  icon: ReactNode;
};

const iconClass =
  'text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110';

export const services: ServiceType[] = [
  {
    titleKey: 'services.items.fullstack.title',
    descriptionKey: 'services.items.fullstack.description',
    icon: <FaCode className={iconClass} />,
  },
  {
    titleKey: 'services.items.api.title',
    descriptionKey: 'services.items.api.description',
    icon: <FaCogs className={iconClass} />,
  },
  {
    titleKey: 'services.items.uiux.title',
    descriptionKey: 'services.items.uiux.description',
    icon: <FaPaintBrush className={iconClass} />,
  },
  {
    titleKey: 'services.items.consulting.title',
    descriptionKey: 'services.items.consulting.description',
    icon: <FaLightbulb className={iconClass} />,
  },
  {
    titleKey: 'services.items.mobile.title',
    descriptionKey: 'services.items.mobile.description',
    icon: <FaMobileAlt className={iconClass} />,
  },
  {
    titleKey: 'services.items.devops.title',
    descriptionKey: 'services.items.devops.description',
    icon: <FaServer className={iconClass} />,
  },
];