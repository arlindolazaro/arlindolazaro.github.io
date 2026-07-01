import type { ReactNode, ReactElement } from 'react';

// ─── Tema e Idioma ───────────────────────────────────────
export type Theme = 'dark' | 'light';
export type Language = 'pt' | 'en';

// ─── Navegação ───────────────────────────────────────────
export type NavItem = {
  key: string;
  path: string;
};

// ─── Tecnologias ─────────────────────────────────────────
export type Technology = {
  name: string;
  icon: ReactNode;
  color?: string;
};

// ─── Projectos ───────────────────────────────────────────
export type Project = {
  titleKey: string;
  descriptionKey: string;
  stack: Technology[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

// ─── Experiência ─────────────────────────────────────────
export type ExperienceItem = {
  position: { pt: string; en: string };
  company: string;
  period: string;
  location: { pt: string; en: string };
  logo?: string;
  link?: string;
  responsibilities: { pt: string[]; en: string[] };
  techStack: string[];
  type: 'work';
};

// ─── Educação ────────────────────────────────────────────
export type EducationItem = {
  degree: { pt: string; en: string };
  institution: string;
  period: string;
  location: { pt: string; en: string };
  logo: string;
  description: { pt: string; en: string };
  focus?: string[];
  status: 'completed' | 'in-progress' | 'ongoing';
};

// ─── Skills ──────────────────────────────────────────────
export type SkillLevel = 'expert' | 'advanced' | 'intermediate';

export type Skill = {
  name: string;
  icon: ReactElement;
  level: SkillLevel;
};

// ─── Serviços ────────────────────────────────────────────
export type ServiceType = {
  titleKey: string;
  descriptionKey: string;
  icon: ReactNode;
};

// ─── Certificados ────────────────────────────────────────
export type Certificate = {
  id: number;
  titleKey: string;
  image: string;
  alt: string;
};

// ─── Redes Sociais ───────────────────────────────────────
export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};