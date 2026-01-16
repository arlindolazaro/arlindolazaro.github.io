export type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  location: string;
  logo?: string;
  link?: string;
  responsibilities: string[];
  techStack: string[];
  type: 'work';
};

export const experiences: ExperienceItem[] = [
  {
    position: 'Desenvolvedor de Sistemas',
    company: 'Tixa Transportes',
    period: 'Jan 2024 – Jul 2025',
    location: 'Maputo, Moçambique',
    type: 'work',
    responsibilities: [
      'Desenvolvimento e optimização de APIs e interfaces web, melhorando a eficiência dos sistemas internos.',
      'Implementação de soluções backend e frontend alinhadas às necessidades do negócio.',
      'Colaboração com equipas multifuncionais em ambiente ágil para entrega contínua de funcionalidades.',
      'Documentação técnica de processos e sistemas, facilitando manutenção e escalabilidade.'
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'REST APIs',
      'Git'
    ],
  },
];
