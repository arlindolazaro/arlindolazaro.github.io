import ujcLogo from '../assets/images/ujc-logo.webp';
import unitecLogo from '../assets/images/unitec-photo.ico';

export type EducationItem = {
  degree: { pt: string; en: string };
  institution: string;
  period: string;
  location: { pt: string; en: string };
  logo: string;
  description: { pt: string; en: string };
  focus?: string[];
  status: 'completed' | 'in-progress' | 'ongoing';
};

export const education: EducationItem[] = [
  {
    degree: {
      pt: 'Licenciatura em Engenharia em Tecnologias e Sistemas de Informação',
      en: 'Bachelor in Information Systems and Technologies Engineering',
    },
    institution: 'Universidade Joaquim Chissano',
    period: '2026',
    location: {
      pt: 'Maputo, Moçambique',
      en: 'Maputo, Mozambique',
    },
    logo: ujcLogo,
    description: {
      pt: 'Formação superior focada na criação de sistemas modernos, escaláveis e orientados a desempenho, com forte base em engenharia de software e arquitetura de aplicações.',
      en: 'Higher education focused on building modern, scalable, performance-driven systems, with a strong foundation in software engineering and application architecture.',
    },
    focus: [
      'Software Engineering',
      'System Design',
      'Agile Development',
      'Databases',
      'UML Modeling',
    ],
    status: 'completed',
  },
  {
    degree: {
      pt: 'Sistemas Informáticos & Programação Web',
      en: 'Computer Systems & Web Programming',
    },
    institution: 'UNITEC Academy',
    period: '2021',
    location: {
      pt: 'Maputo, Moçambique',
      en: 'Maputo, Mozambique',
    },
    logo: unitecLogo,
    description: {
      pt: 'Formação técnica que consolidou fundamentos sólidos em infraestrutura, suporte técnico e desenvolvimento web.',
      en: 'Technical training that consolidated solid foundations in infrastructure, technical support and web development.',
    },
    focus: [
      'Networking',
      'Hardware',
      'Web Fundamentals',
      'Technical Support',
    ],
    status: 'completed',
  },
];