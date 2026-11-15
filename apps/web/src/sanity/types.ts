import type { SanityImageSource } from '@sanity/image-url';

export type ProjectImage = {
  src: SanityImageSource;
  alt: string | null;
  width: number | null;
  height: number | null;
  lqip: string | null;
};

export type Project = {
  id: string;
  n: string;
  title: string;
  category: string;
  year: string;
  role: string;
  blurb: string;
  body: string;
  stack: string[];
  imageLayout: 'carousel' | 'mobile-grid';
  url: string | null;
  href: string | null;
  images: ProjectImage[];
};

export type Skill = {
  name: string;
  icon: string | null;
  color: string | null;
};

export type SkillCategory = {
  id: string;
  category: string;
  skills: Skill[];
};
