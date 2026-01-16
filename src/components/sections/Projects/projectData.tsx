import { FaJava, FaReact } from 'react-icons/fa';
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';
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
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: '🔐 SecureMessaging',
    description:
      'Aplicação fullstack para mensagens seguras com criptografia híbrida (RSA + AES), autenticação JWT e validação de certificados X.509.',
    stack: [
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    githubUrl: 'https://github.com/arlindolazaro/secure-messaging-api.git',
    demoUrl: 'https://github.com/arlindolazaro/secure-messaging-web.git',
    featured: true,
  },
  {
    title: 'Sistema de Notícias',
    description:
      'API RESTful com autenticação JWT, Swagger e testes automatizados usando Spring Boot.',
    stack: [
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
    ],
    githubUrl:
      'https://github.com/arlindolazaro/backend-site-noticias-spring.git',
  },
  {
    title: 'E-commerce Premium',
    description:
      'Plataforma e-commerce com carrinho, checkout e painel administrativo.',
    stack: [
      { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    githubUrl:
      'https://github.com/arlindolazaro/electronics-store-api.git',
    demoUrl:
      'https://github.com/arlindolazaro/electronics-store-web.git',
  },
  {
    title: 'TaskManager',
    description:
      'Gestão de tarefas com autenticação JWT, multiutilizador e frontend moderno.',
    stack: [
      { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    githubUrl: 'https://github.com/arlindolazaro/EventHub-Frontend.git',
  },
];
