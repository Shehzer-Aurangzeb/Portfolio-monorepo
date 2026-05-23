import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  description:
    'Singleton. Powers the About entry in the Index — colophon-style bio with two paragraphs and a personal tech stack.',
  fields: [
    defineField({
      name: 'n',
      title: 'Number label',
      type: 'string',
      description:
        'Reserved character shown where a project number would be. Keep as "—" so About reads as a colophon, not a numbered project.',
      initialValue: '—',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Always "About". Kept as a field so it can be tweaked from Studio without a deploy.',
      initialValue: 'About',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Eyebrow above the title in the detail pane. Keep short and editorial.',
      initialValue: 'Index · Colophon',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Current year. Update annually.',
      initialValue: '2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body (paragraph 1)',
      type: 'text',
      rows: 6,
      description:
        'Who you are, primary stack, focus area. 2–4 sentences. Editorial, third-person-ish voice.',
      initialValue:
        'Fullstack engineer with three-plus years of shipping production web and mobile applications for startups and live clients. Frontend core in React, Next.js and TypeScript, with growing focus on real-time AI-driven interfaces where the UX challenge is as hard as the engineering. Backend work in NestJS and PostgreSQL; familiar with Python and Django.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body2',
      title: 'Body (paragraph 2)',
      type: 'text',
      rows: 6,
      description:
        "What you're currently building and what kind of work interests you. 2–3 sentences.",
      initialValue:
        'Recently building agentic AI chat with real-time streaming and map integrations, a live hospital management system, and high-performance SaaS dashboards. Especially interested in AI products, SaaS platforms, and early-stage remote teams where I can have real impact on the product.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description:
        'Languages, frameworks and libraries you write code in. Shown as the Tech row in the About panel.',
      initialValue: [
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
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'tooling',
      title: 'Tooling & Infra',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description:
        'Tools, platforms and infra you ship and run with — distinct from Stack which is what you write. Shown as a second chip row below Tech.',
      initialValue: [
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
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
    prepare({title, subtitle}) {
      return {title: title ?? 'About', subtitle}
    },
  },
})
