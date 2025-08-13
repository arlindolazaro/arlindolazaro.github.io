import { FaJava, FaReact, FaBootstrap, FaPhp } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs } from 'react-icons/si';
import type { ReactElement } from 'react';

export interface Technology {
  name: string;
  icon: ReactElement;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  stack: Technology[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  bgColor: string;
}

export const projects: Project[] = [
  {
    title: "Sistema de Notícias",
    description: "API RESTful completa com autenticação JWT, documentação Swagger e testes automatizados. Arquitetura em camadas com Spring Boot.",
    stack: [
      { name: "Java", icon: <FaJava />, color: "bg-red-500" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-green-500" },
      { name: "MySQL", icon: <SiMysql />, color: "bg-blue-500" }
    ],
    githubUrl: "https://github.com/arlindolazaro/backend-site-noticias-spring.git",
    demoUrl: "https://news-api-demo.com",
    accentColor: "border-red-500",
    bgColor: "bg-red-500"
  },
  {
    title: "E-commerce Premium",
    description: "Plataforma de comércio eletrônico com carrinho, checkout e painel administrativo. Design responsivo e otimizado para SEO.",
    stack: [
      { name: "PHP", icon: <FaPhp />, color: "bg-indigo-500" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-500" },
      { name: "MySQL", icon: <SiMysql />, color: "bg-blue-500" }
    ],
    githubUrl: "https://github.com/arlindolazaro/LojaMasculina.git",
    accentColor: "border-amber-500",
    bgColor: "bg-amber-500"
  },
  {
    title: "EventHub Platform",
    description: "Aplicação moderna para descoberta de eventos com filtros avançados, mapa integrado e sistema de favoritos. PWA compatível.",
    stack: [
      { name: "React", icon: <FaReact />, color: "bg-blue-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-600" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "bg-gray-800" }
    ],
    githubUrl: "https://github.com/arlindolazaro/EventHub-Frontend.git",
    demoUrl: "https://eventhub-demo.vercel.app",
    accentColor: "border-blue-500",
    bgColor: "bg-blue-500"
  },
  {
    title: "TaskManager",
    description: "Aplicação para gestão de tarefas com autenticação JWT, backend em Spring Boot e frontend moderno com React.js e Tailwind CSS.",
    stack: [
      { name: "Java", icon: <FaJava />, color: "bg-red-500" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-green-500" },
      { name: "React", icon: <FaReact />, color: "bg-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-cyan-400" }
    ],
    githubUrl: "https://github.com/devLazarus258/taskmanager.git",
    accentColor: "border-cyan-500",
    bgColor: "bg-cyan-500"
  }
];
