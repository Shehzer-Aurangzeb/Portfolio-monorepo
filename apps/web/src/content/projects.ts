export type Project = {
  id: string;
  n: string;
  title: string;
  category: string;
  year: string;
  url?: string;
  href?: string | null;
  blurb: string;
  body: string;
  stack: string[];
  role: string;
  images?: string[];
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

export type IndexItem = Project | About;

export const PROJECTS: Project[] = [
  {
    id: 'union',
    n: '01',
    title: 'Union AI',
    category: 'AI / Social Discovery',
    year: '2025',
    href: null,
    blurb:
      'An AI that maps shared values and fosters meaningful connections — because common ground is the common good.',
    body: 'Real-time agentic chat with structured message types, streaming responses, rich in-message animations and embedded map experiences. Built for a live production mobile app where the UX challenge is as hard as the engineering.',
    stack: ['React Native', 'TypeScript', 'Streaming AI', 'Maps'],
    role: 'Frontend Engineer',
  },
  {
    id: 'stanley',
    n: '02',
    title: 'Stanley Paden',
    category: 'Mobile Application',
    year: '2024',
    url: 'App Store',
    href: 'https://apps.apple.com/ca/app/stanley-paden/id6761315194',
    blurb:
      'A production mobile platform built for author Stanley Paden — bringing content, community and events together in one place.',
    body: 'Podcasts and video, blogs, community chat, events, and a full e-book / audiobook reader with in-app purchasing and progress tracking. Shipped to App Store and Play Store.',
    stack: ['React Native', 'TypeScript', 'IAP', 'Audio'],
    role: 'Frontend Lead',
  },
  {
    id: 'ratp',
    n: '03',
    title: 'RATP Dev',
    category: 'Operations Dashboard',
    year: '2024',
    url: 'ratpdev.juptg.com',
    href: 'https://ratpdev.juptg.com/',
    blurb:
      "An employee management dashboard streamlining administrative workflows across RATP Dev's transit operations.",
    body: 'Built with React. Role-based views, batch loading and client-side caching across large datasets, designed for daily use by ops administrators.',
    stack: ['React', 'TypeScript', 'Redux'],
    role: 'Frontend Engineer',
  },
  {
    id: 'dedicate',
    n: '04',
    title: 'Dedicate',
    category: 'Investment Platform',
    year: '2024 — 2025',
    url: 'app.dev.dedicate.com',
    href: 'https://app.dev.dedicate.com/',
    blurb:
      'VC-backed investment platform with a team of about ten across web, iOS and backend. Joined as frontend lead and built the web app from the ground up.',
    body: 'Owned product architecture from a blank slate — design system, data layer, authentication, real-time portfolio views, and the entire investment-flow surface area.',
    stack: ['Next.js', 'TypeScript', 'Zustand', 'GraphQL'],
    role: 'Frontend Lead',
  },
  {
    id: 'runiq',
    n: '05',
    title: 'RUNIQ',
    category: 'SaaS · Test Automation',
    year: '2024',
    url: 'runiq · sign in',
    href: 'https://runiq-frontend.jollyground-c6e4d206.eastus.azurecontainerapps.io/auth/signin',
    blurb:
      'A SaaS platform helping teams record, manage and execute automated tests through user-defined workflows.',
    body: 'Record workflows via a Playwright-based Chrome extension, replay through an automated execution engine, manage test cycles and cases, and review screenshots and screen recordings of every run through the web dashboard.',
    stack: ['Next.js', 'Playwright', 'PostgreSQL', 'NestJS'],
    role: 'Fullstack Engineer',
  },
  {
    id: 'hms',
    n: '06',
    title: 'Hospital Management',
    category: 'Healthcare · Fullstack',
    year: '2024 — 2025',
    url: 'app.myhealthclinic.online',
    href: 'https://app.myhealthclinic.online/login?redirect=%2Fdashboard',
    blurb:
      'A full-stack hospital management platform for a live healthcare client — currently in production.',
    body: 'Covers the complete clinical and administrative workflow: patient registration and vitals, online and walk-in appointment booking with real-time status, role-gated views for admin / doctor / staff, and server-side PDF prescription generation.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'PDFKit'],
    role: 'Fullstack Engineer',
  },
  {
    id: 'gdatalabs',
    n: '07',
    title: 'G-Datalabs',
    category: 'Marketing Site',
    year: '2024',
    url: 'g-datalabs.vercel.app',
    href: 'https://g-datalabs.vercel.app/',
    blurb: 'A marketing site for G-Datalabs — a small data engineering studio.',
    body: 'Lightweight Next.js marketing surface with editorial typography, animated section transitions and a contact funnel.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    role: 'Frontend Engineer',
  },
  {
    id: 'alarm',
    n: '08',
    title: 'Alarm App',
    category: 'Mobile Application',
    year: '2023',
    blurb: 'A focused alarm and reminders app — clean clock face, custom tones and snooze logic.',
    body: 'Built in React Native with native modules for background scheduling, persistent notifications and audio playback respecting silent mode.',
    stack: ['React Native', 'TypeScript', 'Native Modules'],
    role: 'Frontend Engineer',
  },
];

export const ABOUT: About = {
  id: 'about',
  n: '—',
  title: 'About',
  category: 'Index · Colophon',
  year: '2026',
  body: 'Fullstack engineer with three-plus years of shipping production web and mobile applications for startups and live clients. Frontend core in React, Next.js and TypeScript, with growing focus on real-time AI-driven interfaces where the UX challenge is as hard as the engineering. Backend work in NestJS and PostgreSQL; familiar with Python and Django.',
  body2:
    'Recently building agentic AI chat with real-time streaming and map integrations, a live hospital management system, and high-performance SaaS dashboards. Especially interested in AI products, SaaS platforms, and early-stage remote teams where I can have real impact on the product.',
  stack: [
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'Django',
    'GraphQL',
    'Zustand',
    'Redux',
    'Playwright',
    'MongoDB',
  ],
  tooling: [
    'Docker',
    'Vercel',
    'AWS',
    'GitHub Actions',
    'Sanity',
    'Figma',
    'Storybook',
    'Turborepo',
    'pnpm',
    'Sentry',
  ],
};

export const ALL_ITEMS: IndexItem[] = [...PROJECTS, ABOUT];

export function isAbout(item: IndexItem): item is About {
  return item.id === ABOUT.id;
}

export function findItem(id: string | null): IndexItem | null {
  if (!id) return null;
  return ALL_ITEMS.find((p) => p.id === id) ?? null;
}
