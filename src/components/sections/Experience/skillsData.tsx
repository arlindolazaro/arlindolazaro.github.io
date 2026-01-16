import {
  FaReact,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaServer,
  FaBoxes,
  FaShieldAlt,
  FaUserShield,
  FaBug,
  FaLock,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPostgresql,
  SiHibernate,
  SiSwagger,
  SiJunit5,
  SiVite,
} from 'react-icons/si';
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
  level: 'expert' | 'advanced' | 'intermediate';
}

export const SKILLS: Skill[] = [
  { name: 'React', icon: <FaReact />, level: 'expert' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'advanced' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 'expert' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'expert' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 'expert' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'expert' },
  { name: 'Vite', icon: <SiVite />, level: 'advanced' },

  { name: 'Java', icon: <FaJava />, level: 'expert' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 'expert' },
  { name: 'PHP', icon: <FaPhp />, level: 'advanced' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'intermediate' },
  { name: 'REST APIs', icon: <FaServer />, level: 'expert' },
  { name: 'Swagger', icon: <SiSwagger />, level: 'advanced' },
  { name: 'Hibernate / JPA', icon: <SiHibernate />, level: 'advanced' },

  { name: 'MySQL', icon: <SiMysql />, level: 'expert' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'advanced' },
  { name: 'SQL', icon: <FaDatabase />, level: 'expert' },

  { name: 'Git', icon: <FaGitAlt />, level: 'expert' },
  { name: 'GitHub', icon: <FaGithub />, level: 'expert' },
  { name: 'Maven', icon: <FaBoxes />, level: 'advanced' },
  { name: 'Docker', icon: <FaDocker />, level: 'intermediate' },
  { name: 'Linux', icon: <FaLinux />, level: 'intermediate' },
  { name: 'JUnit 5', icon: <SiJunit5 />, level: 'advanced' },

  { name: 'API Security', icon: <FaShieldAlt />, level: 'advanced' },
  { name: 'JWT & Auth', icon: <FaUserShield />, level: 'advanced' },
  { name: 'OWASP Top 10', icon: <FaBug />, level: 'intermediate' },
  { name: 'Secure Coding', icon: <FaLock />, level: 'advanced' },
];
