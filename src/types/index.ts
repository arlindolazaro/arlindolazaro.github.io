export type Technology = {
  name: string;
  icon: React.ReactNode;
  color?: string;
};

export type ProjectType = {
  title: string;
  description: string;
  stack: Technology[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  bgColor: string;
};

export type ExperienceType = {
  position: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  link: string;
  responsibilities: string[];
  techStack: string[];
};

export type ServiceType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type NavItemType = {
  name: string;
  path: string;
};