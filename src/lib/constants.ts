import type { NavItem, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'nav.home', path: '#home' },
  { key: 'nav.about', path: '#about' },
  { key: 'nav.services', path: '#servicos' },
  { key: 'nav.certificates', path: '#certificates' },
  { key: 'nav.projects', path: '#projects' },
  { key: 'nav.experience', path: '#experience' },
  { key: 'nav.contact', path: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arlindo-lázaro-974932267/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/arlindolazaro',
    icon: 'github',
  },
];

export const PRELOADER_DURATION_MS = 1800;
export const SCROLL_OFFSET_RATIO = 0.35;  