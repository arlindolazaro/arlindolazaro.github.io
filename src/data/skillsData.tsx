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
  category: string;
}

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Java', icon: <FaJava />, level: 'expert', category: 'Programming Languages' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'advanced', category: 'Programming Languages' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 'expert', category: 'Programming Languages' },
  { name: 'PHP', icon: <FaPhp />, level: 'advanced', category: 'Programming Languages' },
  { name: 'SQL', icon: <FaDatabase />, level: 'expert', category: 'Programming Languages' },

  // Web Development
  { name: 'React', icon: <FaReact />, level: 'expert', category: 'Web Development' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'intermediate', category: 'Web Development' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'expert', category: 'Web Development' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 'expert', category: 'Web Development' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'expert', category: 'Web Development' },
  { name: 'Vite', icon: <SiVite />, level: 'advanced', category: 'Web Development' },
  { name: 'REST APIs', icon: <FaServer />, level: 'expert', category: 'Web Development' },
  { name: 'Swagger', icon: <SiSwagger />, level: 'advanced', category: 'Web Development' },

  // Backend & Databases
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 'expert', category: 'Backend & Databases' },
  { name: 'Hibernate / JPA', icon: <SiHibernate />, level: 'advanced', category: 'Backend & Databases' },
  { name: 'MySQL', icon: <SiMysql />, level: 'expert', category: 'Backend & Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'advanced', category: 'Backend & Databases' },

  // DevOps & Tools
  { name: 'Git', icon: <FaGitAlt />, level: 'expert', category: 'DevOps & Tools' },
  { name: 'GitHub', icon: <FaGithub />, level: 'expert', category: 'DevOps & Tools' },
  { name: 'Maven', icon: <FaBoxes />, level: 'advanced', category: 'DevOps & Tools' },
  { name: 'Docker', icon: <FaDocker />, level: 'intermediate', category: 'DevOps & Tools' },
  { name: 'Linux', icon: <FaLinux />, level: 'intermediate', category: 'DevOps & Tools' },
  { name: 'JUnit 5', icon: <SiJunit5 />, level: 'advanced', category: 'DevOps & Tools' },

  // Security
  { name: 'API Security', icon: <FaShieldAlt />, level: 'advanced', category: 'Security' },
  { name: 'JWT & Auth', icon: <FaUserShield />, level: 'advanced', category: 'Security' },
  { name: 'OWASP Top 10', icon: <FaBug />, level: 'intermediate', category: 'Security' },
  { name: 'Secure Coding', icon: <FaLock />, level: 'advanced', category: 'Security' },
];