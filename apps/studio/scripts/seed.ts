import {randomUUID} from 'node:crypto'
import {readFile} from 'node:fs/promises'
import {basename, extname, isAbsolute, resolve} from 'node:path'

import {LexoRank} from 'lexorank'
import type {SanityClient} from 'sanity'
import {getCliClient} from 'sanity/cli'

type ProjectImageSeed = {
  // Path to an image file, relative to apps/studio (or absolute).
  src: string
  alt?: string
}

type ProjectSeed = {
  slug: string
  n: string
  title: string
  category: string
  year: string
  role: string
  blurb: string
  body: string
  stack: string[]
  url?: string
  href?: string
  images?: ProjectImageSeed[]
}

type ImageRef = {
  _type: 'image'
  _key: string
  asset: {_type: 'reference'; _ref: string}
  alt: string
}

async function uploadImages(
  client: SanityClient,
  slug: string,
  images: ProjectImageSeed[] | undefined,
): Promise<ImageRef[] | undefined> {
  if (!images || images.length === 0) return undefined

  const out: ImageRef[] = []
  for (const img of images) {
    const absPath = isAbsolute(img.src) ? img.src : resolve(process.cwd(), img.src)
    const buffer = await readFile(absPath)
    const filename = basename(absPath)
    const asset = await client.assets.upload('image', buffer, {filename})
    out.push({
      _type: 'image',
      _key: randomUUID(),
      asset: {_type: 'reference', _ref: asset._id},
      alt: img.alt ?? basename(filename, extname(filename)).replace(/[-_]+/g, ' ').trim(),
    })
  }

  console.log(`  ↑ ${slug}: uploaded ${out.length} image(s)`)
  return out
}

const PROJECTS: ProjectSeed[] = [
  {
    slug: 'union-ai',
    n: '01',
    title: 'Union AI',
    category: 'Mobile',
    year: '2025',
    role: 'Mobile Developer',
    blurb:
      'A consumer social app built around an AI agent that helps people connect, run group conversations and organise events — with a real-time chat surface designed to feel as polished as a native messenger.',
    body: 'Union started as an AI-powered networking platform — users create networks, add people, and chat in groups or DMs, with an agent that proposes discussion topics and surfaces shared interests. The product later expanded into events, where the same agent helps users draft, publish and manage RSVPs end-to-end. I owned the entire chat and messaging surface in a team of around ten, shipping from Figma straight into production.\n\nThe renderer handles a mix of message kinds streamed from the agent — plain text, suggested replies, structured responses — each animated in as it arrives, with FlashList keeping conversations and threads fluid no matter how long the history gets. On top of that I built the interactions that make the chat feel alive: @-mentions inside a custom composer, swipe-to-reply with the source message docking into the input, long-press to reveal a message preview and a context menu (copy, reply, delete) tailored to each message type, voice-message recording, and a paste flow that accepts both text and images from anywhere — WhatsApp, the desktop clipboard, screenshots — straight into a draft.\n\nThe hardest pieces were the ones users never notice: keeping mentions, gestures and the context menu in sync across message types and unbounded message lengths, all while messages stream in real time. The result is a chat surface that holds up next to native messengers and gives the AI agent enough room to behave like a participant, not a button. I also built the onboarding flow that frames that first conversation.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tamagui',
      'React Native Reanimated',
      'FlashList',
    ],
    images: [
      {src: './temp/union-ai/1.PNG', alt: 'Union AI — chat surface'},
      {src: './temp/union-ai/2.PNG', alt: 'Union AI — agent message stream'},
      {src: './temp/union-ai/3.PNG', alt: 'Union AI — mentions in the composer'},
      {src: './temp/union-ai/4.PNG', alt: 'Union AI — long-press context menu'},
      {src: './temp/union-ai/5.PNG', alt: 'Union AI — swipe-to-reply'},
      {src: './temp/union-ai/6.PNG', alt: 'Union AI — event creation flow'},
      {src: './temp/union-ai/7.PNG', alt: 'Union AI — onboarding'},
    ],
  },
  {
    slug: 'stanley-paden',
    n: '02',
    title: 'Stanley Paden',
    category: 'Mobile',
    year: '2025 — 2026',
    role: 'React Native Developer',
    blurb:
      'A complete content platform for author Stanley Paden — eBooks, audiobooks, video, podcasts, in-app purchasing and a community feed, all in one mobile app I owned end-to-end from React Native UI down to the App Store / Play Store release pipeline.',
    body: 'Stanley Paden is the official mobile app for the author of the same name — a single surface that consolidates everything around his work: an in-app PDF reader for eBooks, a custom audiobook player, blog posts, video, podcasts, Stripe-powered purchasing for digital and physical hardcovers and paperbacks, and a community feature with topic-based group chats. Nothing kicks the user out to the web; the whole library lives behind one login. I was the sole frontend on a two-person contract build (one backend developer), shipping over a four-month timeline.\n\nThe app surface is broad on purpose. The reader handles long-form PDFs with progress tracking, the audiobook player is built on React Native Track Player with full background playback and lock-screen controls, Stripe is wired in for both digital and physical orders, and FlashList keeps the long catalogue and chat threads smooth on lower-end devices. Communities — created from the admin panel — use lightweight polling for new messages, which kept the realtime UX honest without standing up websocket infrastructure for a small audience. Alongside the mobile app I built the React + Vite admin panel that powers all content authoring and community management.\n\nThe piece I am most proud of is the release pipeline. I designed three separate GitHub Actions workflows that route by path: a JS-only diff fires an EAS Update OTA that reaches users in 2–3 minutes; a native diff triggers a full EAS Build; a release tag runs EAS Submit to push fresh binaries to TestFlight and the Play Store internal track, fully automated. Sentry catches crashes and regressions in production. The end result is an app that ships features the same day they merge, with no manual store paperwork in the loop.\n\nThe app is live on the App Store today. For a recruiter, the takeaway is end-to-end ownership: a feature-rich consumer app built solo on the frontend, plus the deployment infrastructure that keeps it shipping.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tamagui',
      'FlashList',
      'Framer Motion',
      'React Native Track Player',
      'Stripe',
      'Sentry',
      'GitHub Actions',
      'EAS',
    ],
    url: 'App Store',
    href: 'https://apps.apple.com/ca/app/stanley-paden/id6761315194',
    images: [
      {src: './temp/stanley-paden/1.jpg'},
      {src: './temp/stanley-paden/2.jpg'},
      {src: './temp/stanley-paden/3.jpg'},
      {src: './temp/stanley-paden/4.jpg'},
      {src: './temp/stanley-paden/5.jpg'},
      {src: './temp/stanley-paden/6.jpg'},
      {src: './temp/stanley-paden/7.jpg'},
      {src: './temp/stanley-paden/8.jpg'},
      {src: './temp/stanley-paden/9.jpg'},
      {src: './temp/stanley-paden/10.jpg'},
    ],
  },
  {
    slug: 'ratp-dev',
    n: '03',
    title: 'RATP Dev - Employee Attendance Management',
    category: 'Web',
    year: '2023',
    role: 'Frontend Developer',
    blurb:
      'An enterprise attendance management dashboard for RATP Dev, one of the largest public-transport operators in France — anchored by a custom report builder that turns a spreadsheet-style UI into a dynamic, calculating, exportable reporting engine.',
    body: 'RATP Dev needed a single internal system to manage employee attendance across their USA operations: clock in / clock out, shift scheduling, leave and vacation workflows, and reporting that their administrators could trust. I built the dashboard end-to-end with the ConceptZI team over roughly five months in 2023, working directly with the client on bi-monthly calls to gather requirements, scope features and translate operational needs into the UI.\n\nThe core surface covers everything a transit-operations admin touches day-to-day. Role-based access splits the experience between admins and managers, each with their own permissions and views. Shift scheduling, leave requests and attendance tracking are wired through REST APIs, and an analytics layer built on Recharts breaks the numbers down by department, time range and trend — the kind of charts ops teams actually use to spot patterns instead of just decorate a dashboard.\n\nThe standout piece is the custom report builder. The client needed reports — weekly, monthly, quarterly — that looked like familiar tables but behaved like smart forms: layouts had to regenerate based on report type, some fields had to be hand-entered by managers while others auto-calculated from those inputs in real time, and the whole thing had to export cleanly to both Excel (xlsx) and PDF (jsPDF). No off-the-shelf table component fit, so I built the layout engine from scratch — dynamic field generation, cross-field dependencies, and exporters that round-trip the live state into properly formatted documents.\n\nFor a recruiter, this project is the one where enterprise scale, complex client interactions and a non-trivial UI engineering problem all sit in the same codebase. I owned client communication, requirement gathering and the full frontend — not just the components, but the data layer, custom hooks and the report engine that makes the product actually useful to the people running it.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'jsPDF', 'xlsx', 'REST APIs'],
    url: 'ratpdev.juptg.com',
    href: 'https://ratpdev.juptg.com/',
    images: [
      {src: './temp/ratp-dev/1.png'},
      {src: './temp/ratp-dev/2.png'},
      {src: './temp/ratp-dev/3.png'},
      {src: './temp/ratp-dev/4.png'},
      {src: './temp/ratp-dev/5.png'},
      {src: './temp/ratp-dev/6.png'},
    ],
  },
  {
    slug: 'dedicate',
    n: '04',
    title: 'Dedicate',
    category: 'Web',
    year: '2026',
    role: 'Frontend Lead',
    blurb:
      'VC-backed asset management platform where I led frontend development for a team of ~10. Built the entire web application from scratch with Next.js, implementing Auth0 with passwordless OTP and passkey support, Plaid integration for financial accounts, and a BFF architecture to keep service credentials server-side.',
    body: 'Dedicate is a VC-backed investment platform built with Next.js, React, and TypeScript. I joined as frontend lead in January 2026 and built the web app from the ground up, working alongside iOS and backend teams.\n\nI implemented the complete authentication system using Auth0 with HttpOnly session cookies, passwordless OTP, and passkey support. The multi-IDP token chain feeds into Skyflow for privileged API calls, following a BFF (Backend for Frontend) pattern so all service credentials stay server-side.\n\nBuilt the data layer with TanStack Query using dynamic caching strategies based on data change frequency, reducing unnecessary API calls. Integrated Plaid for connecting user financial accounts and pulling transaction data. Set up Vitest for component testing and created a component library with preview documentation for the design system.\n\nTranslated Figma designs into production code, establishing the foundational UI architecture, design system, and investment flow interfaces that the product is built on.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'TanStack Query',
      'Auth0',
      'Plaid',
      'Skyflow',
      'Vitest',
      'Tailwind CSS',
    ],
    url: 'app.dev.dedicate.com',
    href: 'https://app.dev.dedicate.com/',
    images: [
      {src: './temp/dedicate/1.jpg'},
      {src: './temp/dedicate/2.png'},
      {src: './temp/dedicate/3.png'},
      {src: './temp/dedicate/4.png'},
    ],
  },
  {
    slug: 'runiq',
    n: '05',
    title: 'RUNIQ',
    category: 'Web',
    year: '2025',
    role: 'Frontend Engineer',
    blurb:
      'SaaS automated testing platform deployed on Azure. Switched test execution UI from polling to WebSockets, built a visual test cycle builder with ReactFlow, and integrated Playwright for workflow recording and test replay.',
    body: 'RUNIQ is a SaaS platform for automated testing workflows, deployed on Azure via GitHub Actions. I worked as a contract frontend engineer, building the dashboard with Next.js and Zustand for state management.\n\nSwitched the test execution UI from polling to WebSockets with automatic reconnection on connection drop, significantly reducing unnecessary network traffic. Built a custom HTTP client with in-flight request deduplication and token caching to prevent duplicate simultaneous requests.\n\nCreated a visual test cycle builder using ReactFlow with drag-and-drop functionality, custom nodes, and real-time execution status overlaid directly on the graph. Integrated the Playwright browser extension for workflow recording and playwright-mcp for test replay capabilities.\n\nImplemented batch loading, optimistic UI updates, and client-side caching strategies to improve performance when handling large datasets of test cycles, cases, execution results, screenshots, and screen recordings.',
    stack: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'ReactFlow',
      'WebSockets',
      'Playwright',
      'playwright-mcp',
      'Azure',
      'GitHub Actions',
    ],
    url: 'runiq · sign in',
    href: 'https://runiq-frontend.jollyground-c6e4d206.eastus.azurecontainerapps.io/auth/signin',
    images: [
      {src: './temp/runiq/1.jpeg'},
      {src: './temp/runiq/2.jpeg'},
      {src: './temp/runiq/3.jpeg'},
      {src: './temp/runiq/4.jpeg'},
      {src: './temp/runiq/5.jpeg'},
      {src: './temp/runiq/6.jpeg'},
      {src: './temp/runiq/7.jpeg'},
      {src: './temp/runiq/8.jpeg'},
      {src: './temp/runiq/9.jpeg'},
    ],
  },
  {
    slug: 'hms',
    n: '06',
    title: 'Hospital Management System',
    category: 'Web',
    year: '2026',
    role: 'Fullstack Developer',
    blurb:
      'Complete hospital management platform built solo for a live healthcare client. Covers patient management, appointments, billing, queue management, and staff administration with role-based access control. Currently live in production.',
    body: 'Built this entire full-stack hospital management system solo — both frontend and backend — for a live healthcare client. The platform is deployed on Vercel (frontend) and Render (backend) with Docker.\n\nArchitected a modular NestJS backend with feature modules for patient management, appointments, billing, queue management, and staff administration. Designed the PostgreSQL schema from scratch including a 7-state visit lifecycle with business rule validation, role-based access for Admin, Doctor, and Staff roles, and JSON columns for flexible clinical data storage.\n\nImplemented JWT authentication with short-lived access tokens, rotating refresh tokens, bcrypt password hashing, and account lockout for security. Generated TypeScript types automatically from the OpenAPI spec so frontend and backend types stay in sync without manual definitions.\n\nBuilt server-side PDF prescription generation using PDFKit. Created a public-facing landing page with online booking flow for patients. Automated database migrations on every deploy using Docker and render.yaml. The system handles patient records, vitals tracking, appointment scheduling with real-time status updates, and complete administrative workflows.',
    stack: [
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'JWT',
      'PDFKit',
      'TypeScript',
      'OpenAPI',
      'Vercel',
      'Render',
    ],
    url: 'app.myhealthclinic.online',
    href: 'https://app.myhealthclinic.online/login?redirect=%2Fdashboard',
    images: [
      {src: './temp/hms/1.jpeg'},
      {src: './temp/hms/2.jpeg'},
      {src: './temp/hms/3.jpeg'},
      {src: './temp/hms/4.jpeg'},
      {src: './temp/hms/5.jpeg'},
    ],
  },
  {
    slug: 'gdatalabs',
    n: '07',
    title: 'G-Datalabs',
    category: 'Web',
    year: '2024',
    role: 'Frontend Developer',
    blurb:
      'Marketing website for G-Datalabs, a data engineering studio. Built with Next.js featuring smooth animations, editorial typography, and an integrated contact funnel.',
    body: 'Designed and developed a marketing website for G-Datalabs, a boutique data engineering consultancy. Built with Next.js and TypeScript, focusing on clean design and smooth user experience.\n\nImplemented animated section transitions and scroll-based interactions to create an engaging browsing experience. Designed editorial typography hierarchy and responsive layouts that work seamlessly across devices. Integrated a contact form funnel for lead generation.\n\nDeployed on Vercel with optimized performance and fast page loads. The site serves as the primary digital presence for the studio, showcasing their services and facilitating client inquiries.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    url: 'g-datalabs.vercel.app',
    href: 'https://g-datalabs.vercel.app/',
    images: [
      {src: './temp/g-datalabs/1.png'},
      {src: './temp/g-datalabs/2.png'},
      {src: './temp/g-datalabs/3.png'},
      {src: './temp/g-datalabs/4.png'},
    ],
  },
  {
    slug: 'alarm',
    n: '08',
    title: 'Alarm App',
    category: 'Web',
    year: '2023',
    role: 'Frontend Developer',
    blurb:
      'A focused web-based alarm and reminders app with a clean clock interface, custom alarm tones, and snooze functionality.',
    body: 'Built a web alarm application using React and TypeScript. The app features a clean clock face UI, customizable alarm tones, and snooze logic for managing multiple alarms and reminders.\n\nImplemented browser notification APIs for alarm alerts and audio playback for alarm sounds. Designed a minimal, distraction-free interface focused on core alarm functionality. Built responsive layouts that work across desktop and mobile browsers.\n\nHandled time zone management and persistent alarm storage using browser localStorage to maintain user alarm settings across sessions.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Notifications API', 'Web Audio API'],
    images: [
      {src: './temp/alarm/1.png'},
      {src: './temp/alarm/2.png'},
      {src: './temp/alarm/3.png'},
      {src: './temp/alarm/4.png'},
    ],
  },
]

const ABOUT = {
  _id: 'about',
  _type: 'about',
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
}

const CONTACT = {
  _id: 'contact',
  _type: 'contact',
  email: 'shehzerabbasi621@gmail.com',
  phone: '+1 514 241 1019',
  github: 'https://github.com/Shehzer-Aurangzeb',
  githubLabel: 'github.com/Shehzer-Aurangzeb',
  githubHandle: 'Shehzer-Aurangzeb',
  linkedin: 'https://www.linkedin.com/in/shehzar-aurangzeb-70009520b',
  linkedinLabel: 'linkedin.com/in/shehzar-aurangzeb',
  linkedinHandle: 'shehzar-aurangzeb',
  location: 'Montréal, QC',
  availability: 'Available · Q3 2026',
}

async function seed() {
  const client = getCliClient()

  const tx = client.transaction()

  // Old dotted ids (private namespace) and slug renames that should be removed.
  const RETIRED_PROJECT_IDS = [
    'project.union',
    'project.stanley',
    'project.ratp',
    'project.union-ai',
    'project.stanley-paden',
    'project.ratp-dev',
    'project.dedicate',
    'project.runiq',
    'project.hms',
    'project.gdatalabs',
    'project.alarm',
  ]
  for (const id of RETIRED_PROJECT_IDS) {
    tx.delete(id)
  }

  let rank = LexoRank.middle()
  for (const p of PROJECTS) {
    const images = await uploadImages(client, p.slug, p.images)
    tx.createOrReplace({
      _id: `project-${p.slug}`,
      _type: 'project',
      orderRank: rank.toString(),
      n: p.n,
      title: p.title,
      slug: {_type: 'slug', current: p.slug},
      category: p.category,
      year: p.year,
      role: p.role,
      blurb: p.blurb,
      body: p.body,
      stack: p.stack,
      ...(p.url ? {url: p.url} : {}),
      ...(p.href ? {href: p.href} : {}),
      ...(images ? {images} : {}),
    })
    rank = rank.genNext()
  }

  tx.createOrReplace(ABOUT)
  tx.createOrReplace(CONTACT)

  const result = await tx.commit()
  console.log(`Seeded ${result.results.length} documents.`)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
