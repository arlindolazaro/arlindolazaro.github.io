// aboutData.tsx
import { FaReact, FaJava, FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiJavascript, SiMysql, SiTailwindcss } from 'react-icons/si';
import type { ReactNode } from 'react';

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
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'SQL', icon: <FaDatabase /> },
];
