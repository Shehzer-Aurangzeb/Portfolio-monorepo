export type Link = {
  label: string;
  href: string;
};

export type NavItem = Link & {
  desktopOnly?: boolean;
};

export type LookingForItem = {
  title: string;
  description: string;
};

export const contact = {
  email: 'shehzerabbasi621@gmail.com',
  location: 'Montreal, QC',
  links: [
    { label: 'GitHub', href: 'https://github.com/Shehzer-Aurangzeb' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shehzar-aurangzeb-70009520b' },
    { label: 'CV', href: '/ShehzarAurangzeb.pdf' },
  ] satisfies Link[],
};

export const header = {
  name: 'Shehzar Aurangzeb',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills', desktopOnly: true },
    { label: 'CV', href: '/ShehzarAurangzeb.pdf' },
  ] satisfies NavItem[],
  cta: 'Email me',
};

export const hero = {
  name: 'Shehzar Aurangzeb',
  tagline: 'Software Engineer · Montreal, QC',
  status: 'Open to work',
  availability: 'Montreal or remote',
  headline:
    'I build products end to end and ship them: web and mobile front-ends, the backends behind them, and the release pipelines that put them in front of real users.',
  bio: 'Front-end lead at a VC-backed wealth management platform, shipping a consumer app from scratch. Before that, I built a hospital management system end-to-end solo and put two apps on the App Store and Play Store myself. 3.5 years of React, TypeScript, and getting things live. M.S. Applied Computer Science, Concordia 2025.',
};

export const work = {
  featuredCount: 4,
};

export const skills = {
  visiblePerCategory: 5,
};

export const lookingFor: LookingForItem[] = [
  {
    title: 'Senior or lead front-end',
    description: 'Product teams where the front-end owner also has a say in the API',
  },
  {
    title: 'Montreal or remote',
    description: 'Hybrid in Montreal, or remote across North American hours',
  },
  {
    title: 'Available now',
    description: "Two weeks' notice. Happy to walk through any project's code live",
  },
];
