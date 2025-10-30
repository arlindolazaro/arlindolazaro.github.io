import ujcLogo from '../../../assets/images/ujc-logo.webp';
import unitecLogo from '../../../assets/images/unitec-photo.ico';

export type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  link: string;
  responsibilities: string[];
  techStack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    position: 'Desenvolvedor de Sistemas',
    company: 'Universidade Joaquim Chissano (UJC)',
    period: 'Jan 2024 - Jul 2024',
    location: 'Cidade de Maputo, Moçambique',
    logo: ujcLogo,
    link: 'https://demo.ujc.ac.mz/',
    responsibilities: [
      'Desenvolvi e optimizei APIs e interfaces webs, aumentando a eficiência do sistema em 20%',
      'Implementei soluções com Java, Spring Boot e React, reduzindo erros em produção em 15%',
      'Colaborei com equipes multidisciplinares para entrega de projectos com alta qualidade',
      'Documentei processos técnicos e treinei novos desenvolvedores',
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
  },
  {
    position: 'Técnico de Redes de Computadores',
    company: 'UNITEC Academy',
    period: 'Set 2021 - Jan 2022',
    location: 'Cidade de Maputo, Moçambique',
    logo: unitecLogo,
    link: 'https://unitec.ac.mz/',
    responsibilities: [
      'Gerenciei configuração e optimização de redes, aumentando a estabilidade em 25%',
      'Diagnostiquei e solucionei problemas técnicos, reduzindo tempo de inatividade em 30%',
      'Desenvolvi documentação técnica para protocolos de rede',
    ],
    techStack: ['Redes'],
  },
];
