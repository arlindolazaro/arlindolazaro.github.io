import ujcLogo from '../../../assets/images/ujc-logo.webp';
import unitecLogo from '../../../assets/images/unitec-photo.ico';

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  focus?: string[];
  status: 'completed' | 'in-progress' | 'ongoing';
};

export const education: EducationItem[] = [
  {
    degree: 'Licenciatura em Engenharia em Tecnologias e Sistemas de Informação',
    institution: 'Universidade Joaquim Chissano',
    period: 'Em andamento',
    location: 'Maputo, Moçambique',
    logo: ujcLogo,
    description:
      'Formação superior focada na criação de sistemas modernos, escaláveis e orientados a desempenho, com forte base em engenharia de software e arquitetura de aplicações.',
    focus: [
      'Software Engineering',
      'System Design',
      'Agile Development',
      'Databases',
      'UML Modeling',
    ],
    status: 'in-progress',
  },
  {
    degree: 'Sistemas Informáticos & Programação Web',
    institution: 'UNITEC Academy',
    period: '2021',
    location: 'Maputo, Moçambique',
    logo: unitecLogo,
    description:
      'Formação técnica que consolidou fundamentos sólidos em infraestrutura, suporte técnico e desenvolvimento web.',
    focus: [
      'Networking',
      'Hardware',
      'Web Fundamentals',
      'Technical Support',
    ],
    status: 'completed',
  },
];
