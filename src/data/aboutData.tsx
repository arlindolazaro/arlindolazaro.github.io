// aboutData.tsx
import type { ReactNode } from 'react';
import {
  FaReact,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPostgresql,
} from 'react-icons/si';

export interface Technology {
  name: string;
  icon: ReactNode;
}

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGithub /> },
  { name: 'Docker', icon: <FaDocker /> },
];
