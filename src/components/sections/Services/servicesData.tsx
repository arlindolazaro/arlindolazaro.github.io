// servicesData.tsx
import { FaCode, FaCogs, FaPaintBrush, FaLightbulb } from 'react-icons/fa';
import type { ReactNode } from 'react';

export type ServiceType = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const services: ServiceType[] = [
  {
    title: "Desenvolvimento Full-Stack",
    description: "Criação de aplicações web completas com front-end e back-end utilizando tecnologias modernas como React, Spring Boot e Java.",
    icon: <FaCode className="text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "Desenvolvimento de APIs",
    description: "Construção de APIs RESTful robustas e escaláveis com Spring Boot, garantindo alta performance e segurança.",
    icon: <FaCogs className="text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Desenvolvimento de interfaces intuitivas e responsivas com React, TypeScript e bibliotecas modernas como Tailwind CSS.",
    icon: <FaPaintBrush className="text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
  {
    title: "Consultoria em TI",
    description: "Orientação técnica para projectos de software, arquitetura de sistemas e melhores práticas de desenvolvimento.",
    icon: <FaLightbulb className="text-3xl transition-transform duration-300 group-hover:rotate-6" />,
  },
];
