export type ExperienceItem = {
  position: { pt: string; en: string };
  company: string;
  period: string;
  location: { pt: string; en: string };
  logo?: string;
  link?: string;
  responsibilities: { pt: string[]; en: string[] };
  techStack: string[];
  type: 'work';
};

export const experiences: ExperienceItem[] = [
  {
    position: {
      pt: 'Desenvolvedor de Sistemas',
      en: 'Systems Developer',
    },
    company: 'Tixa Transportes',
    period: 'Jan 2024 – Jul 2025',
    location: {
      pt: 'Maputo, Moçambique',
      en: 'Maputo, Mozambique',
    },
    type: 'work',
    responsibilities: {
      pt: [
        'Desenvolvimento e optimização de APIs e interfaces web, melhorando a eficiência dos sistemas internos.',
        'Implementação de soluções backend e frontend alinhadas às necessidades do negócio.',
        'Colaboração com equipas multifuncionais em ambiente ágil para entrega contínua de funcionalidades.',
        'Documentação técnica de processos e sistemas, facilitando manutenção e escalabilidade.',
      ],
      en: [
        'Development and optimization of APIs and web interfaces, improving internal systems efficiency.',
        'Implementation of backend and frontend solutions aligned with business needs.',
        'Collaboration with cross-functional teams in an agile environment for continuous feature delivery.',
        'Technical documentation of processes and systems, facilitating maintenance and scalability.',
      ],
    },
    techStack: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'REST APIs',
      'Git',
    ],
  },
];