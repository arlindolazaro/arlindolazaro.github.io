import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiMysql, SiPostgresql } from 'react-icons/si';
import type { ReactElement } from 'react';

export interface Technology {
  name: string;
  icon: ReactElement;
  color: string;
}

export interface Project {
  titleKey: string;
  descriptionKey: string;
  stack: Technology[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    titleKey: 'projects.items.secureMessaging.title',
    descriptionKey: 'projects.items.secureMessaging.description',
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
    titleKey: 'projects.items.newsSystem.title',
    descriptionKey: 'projects.items.newsSystem.description',
    stack: [
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
    ],
    githubUrl: 'https://github.com/arlindolazaro/backend-site-noticias-spring.git',
  },
  {
    titleKey: 'projects.items.ecommerce.title',
    descriptionKey: 'projects.items.ecommerce.description',
    stack: [
      { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    githubUrl: 'https://github.com/arlindolazaro/electronics-store-api.git',
    demoUrl: 'https://github.com/arlindolazaro/electronics-store-web.git',
  },
  {
    titleKey: 'projects.items.taskManager.title',
    descriptionKey: 'projects.items.taskManager.description',
    stack: [
      { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
      { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    githubUrl: 'https://github.com/arlindolazaro/EventHub-Frontend.git',
  },
];