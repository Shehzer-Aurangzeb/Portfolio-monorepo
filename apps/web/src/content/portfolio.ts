export type Skill = {
  name: string;
  icon: string | null;
  color?: string;
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export type LookingForItem = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  imageLayout: 'carousel' | 'mobile-grid';
  images: string[];
};

export const header = {
  name: 'Shehzar Aurangzeb',
  nav: [
    { label: 'Projects', href: '#projects' },
    { label: 'CV', href: '/cv.pdf' },
  ],
  status: 'Open to work',
  cta: { label: 'Email me', href: 'mailto:shehzerabbasi621@gmail.com' },
};

export const hero = {
  name: 'Shehzar Aurangzeb',
  tagline: 'Software Engineer · Montreal, QC',
  headline:
    'I build products end to end and ship them: web and mobile front-ends, the backends behind them, and the release pipelines that put them in front of real users.',
  status: 'Open to work',
  links: [
    {
      label: 'shehzerabbasi621@gmail.com',
      href: 'mailto:shehzerabbasi621@gmail.com',
    },
    { label: 'GitHub', href: 'https://github.com/Shehzer-Aurangzeb' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shehzar-aurangzeb-70009520b',
    },
  ],
  bio: 'Front-end lead at a VC-backed wealth management platform, shipping a consumer app from scratch. Before that, I built a hospital management system end-to-end solo and put two apps on the App Store and Play Store myself. 3.5 years of React, TypeScript, and getting things live. M.S. Applied Computer Science, Concordia 2025.',
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'nextdotjs', color: '#F2F0EC' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38BDF8' },
      { name: 'TanStack Query', icon: 'reactquery', color: '#FF4154' },
    ],
  },
  {
    label: 'Mobile',
    skills: [
      { name: 'React Native', icon: 'react', color: '#61DAFB' },
      { name: 'Expo', icon: 'expo', color: '#F2F0EC' },
      { name: 'EAS', icon: null },
      { name: 'App Store', icon: 'appstore', color: '#0D96F6' },
      { name: 'Play Store', icon: 'googleplay', color: '#34A853' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E' },
      { name: 'NestJS', icon: 'nestjs', color: '#E0234E' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#6C8FE8' },
      { name: 'Prisma', icon: 'prisma', color: '#8B9DF7' },
      { name: 'GraphQL', icon: 'graphql', color: '#E10098' },
    ],
  },
  {
    label: 'Cloud & Infra',
    skills: [
      { name: 'AWS Lambda', icon: 'awslambda', color: '#FF9900' },
      { name: 'EventBridge', icon: 'amazoneventbridge', color: '#FF4F8B' },
      { name: 'EC2', icon: 'amazonec2', color: '#FF9900' },
      { name: 'S3', icon: 'amazons3', color: '#569A31' },
      { name: 'RDS', icon: 'amazonrds', color: '#527FFF' },
      { name: 'CloudWatch', icon: 'amazoncloudwatch', color: '#FF4F8B' },
      { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
  },
];

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

export const projects: Project[] = [
  {
    id: 'dedicate',
    number: '01',
    title: 'Dedicate',
    role: 'Front-end lead, team of ~10',
    period: '2024–now',
    description:
      'A VC-backed asset management platform. I built the customer-facing app from scratch: the shared component system, a BFF layer between it and the services, the data layer, and the whole Auth0 flow with passwordless OTP and passkeys. The tiered cache took repeat API calls down by roughly half across eighteen query patterns.',
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Auth0', 'Plaid', 'Vitest'],
    imageLayout: 'carousel',
    images: ['dedicate-1.png', 'dedicate-2.png', 'dedicate-3.png'],
  },
  {
    id: 'stanley-paden',
    number: '02',
    title: 'Stanley Paden',
    role: 'Sole developer',
    period: 'live on both stores',
    description:
      "An author's app covering seven kinds of content. I built the app, the CMS behind it and the release pipeline, and handled both store submissions myself. Content updates ship over the air in about three minutes instead of a native rebuild.",
    stack: ['React Native', 'Expo', 'EAS', 'Stripe', 'Sentry'],
    imageLayout: 'mobile-grid',
    images: ['sp-1.png', 'sp-2.png', 'sp-3.png'],
  },
  {
    id: 'hms',
    number: '03',
    title: 'Hospital Management System',
    role: 'Solo, front to back',
    period: 'live with a client',
    description:
      'Built alone and running with a healthcare client. Five modules covering patients, appointments, billing, the queue and staff administration, with a seven-state visit lifecycle holding the clinical flow together.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    imageLayout: 'carousel',
    images: ['hms-1.png', 'hms-2.png', 'hms-3.png'],
  },
  {
    id: 'union-ai',
    number: '04',
    title: 'Union AI',
    role: 'Front-end, team of 8–9',
    period: '2025',
    description:
      'A mobile AI chat product. I owned the message rendering system, mapping more than twenty backend message types onto about sixteen reusable renderers, with responses streaming in mid-conversation.',
    stack: ['React Native', 'TypeScript', 'Expo'],
    imageLayout: 'mobile-grid',
    images: ['union-1.png', 'union-2.png', 'union-3.png', 'union-4.png'],
  },
  {
    id: 'meridian',
    number: '05',
    title: 'Meridian',
    role: 'Personal',
    period: '2024',
    description:
      "A serverless market analysis platform. Every price level the model reports is checked against the real candle data before it reaches the user, so the analysis can't invent numbers. Backtested over roughly six thousand trades.",
    stack: ['NestJS', 'AWS Lambda', 'PostgreSQL', 'Claude API'],
    imageLayout: 'carousel',
    images: ['meridian-1.png', 'meridian-2.png', 'meridian-3.png'],
  },
  {
    id: 'runiq',
    number: '06',
    title: 'RUNIQ',
    role: 'Front-end',
    period: '2025',
    description:
      'A visual test cycle builder on ReactFlow, with live execution status streaming over WebSockets. Replacing per-node polling with a single subscription cut network requests by about ninety percent.',
    stack: ['Next.js', 'TypeScript', 'ReactFlow', 'WebSockets'],
    imageLayout: 'carousel',
    images: ['runiq-1.png', 'runiq-2.png', 'runiq-3.png'],
  },
  {
    id: 'hired',
    number: '07',
    title: 'hired',
    role: 'Personal',
    period: '2024',
    description:
      "A CV tailoring tool. It reads a job posting and assembles a CV by selecting from bullets I wrote myself, never generating new claims, so nothing on the page is something I can't defend in an interview.",
    stack: ['Angular', 'FastAPI', 'PostgreSQL', 'Claude API'],
    imageLayout: 'carousel',
    images: ['hired-1.png', 'hired-2.png', 'hired-3.png'],
  },
  {
    id: 'outreach-deck',
    number: '08',
    title: 'Outreach Deck',
    role: 'Personal',
    period: '2024',
    description:
      'An outreach tracker built around a Kanban board, for keeping conversations with recruiters and founders straight instead of losing them in a spreadsheet.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    imageLayout: 'carousel',
    images: ['outreach-1.png', 'outreach-2.png', 'outreach-3.png'],
  },
  {
    id: 'swift-reflex',
    number: '09',
    title: 'Swift Reflex',
    role: 'Solo',
    period: 'published on the App Store',
    description:
      'A reaction-time game I built and published on my own, start to finish, including the store listing and release.',
    stack: ['React Native', 'Expo'],
    imageLayout: 'mobile-grid',
    images: ['swift-1.png', 'swift-2.png', 'swift-3.png'],
  },
];

export const footer = {
  location: 'Montreal, QC',
  email: 'shehzerabbasi621@gmail.com',
};
