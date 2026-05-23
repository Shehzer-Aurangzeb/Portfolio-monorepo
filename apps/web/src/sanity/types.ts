import type { SanityImageSource } from '@sanity/image-url';

export type ProjectImage = {
  src: SanityImageSource;
  alt: string | null;
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
  url: string | null;
  href: string | null;
  images: ProjectImage[];
};

export type About = {
  id: 'about';
  n: string;
  title: string;
  category: string;
  year: string;
  body: string;
  body2: string;
  stack: string[];
  tooling: string[];
};

export type Contact = {
  email: string;
  phone: string | null;
  github: string | null;
  githubLabel: string | null;
  githubHandle: string | null;
  linkedin: string | null;
  linkedinLabel: string | null;
  linkedinHandle: string | null;
  location: string | null;
  availability: string | null;
};

export type IndexItem = Project | About;

export type SiteData = {
  projects: Project[];
  about: About | null;
  contact: Contact | null;
};

export function isAbout(item: IndexItem): item is About {
  return item.id === 'about';
}
