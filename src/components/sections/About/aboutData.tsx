// aboutData.tsx
import { FaReact, FaJava, FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiJavascript, SiMysql, SiTailwindcss } from 'react-icons/si';
import type { ReactNode } from 'react';

export interface Technology {
  name: string;
  icon: ReactNode;
}

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
  { name: 'PHP', icon: <FaPhp className="text-purple-700" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-gray-600" /> },
];
