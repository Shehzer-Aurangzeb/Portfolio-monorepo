import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    orderRankField({type: 'project'}),
    defineField({
      name: 'n',
      title: 'Number label',
      type: 'string',
      description:
        'Editorial number shown above the title in the detail pane (e.g. "01", "07"). Pad to two digits. Independent of drag order — set whatever reads best.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Project name as it appears in the Index list and the detail header (e.g. "Union AI", "Stanley Paden").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Stable identifier used by the frontend (kebab-case, lowercase). Matches the existing id in src/content/projects.ts — e.g. "union", "stanley", "ratp".',
      options: {source: 'title', maxLength: 64},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description:
        'Short tagline shown as the eyebrow above the title. 2–4 words. Examples: "Mobile Application", "Operations Dashboard", "Investment Platform", "SaaS · Test Automation".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description:
        'Year or range. Use a single year ("2024") or an em-dash range ("2024 — 2025"). Em-dash, not hyphen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description:
        'Your role on the project. Examples: "Frontend Engineer", "Frontend Lead", "Fullstack Engineer".',
      initialValue: 'Frontend Engineer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 3,
      description:
        "One- or two-sentence italic line under the title. Editorial voice — describes the project's character, not its tech. Aim for under 200 chars.",
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 6,
      description:
        'Plain paragraph below the blurb. Concrete details about what was built, the technical surface, and any notable outcomes. 1–3 sentences.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description:
        'Tech chips shown in the Stack row. 3–4 short tags. Examples: "React Native", "TypeScript", "Next.js", "PostgreSQL".',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'url',
      title: 'URL label',
      type: 'string',
      description:
        'Text shown on the link pill. Use the bare host ("app.example.com") or a custom label ("App Store", "Live demo"). Leave blank to hide the pill entirely.',
    }),
    defineField({
      name: 'href',
      title: 'URL href',
      type: 'url',
      description:
        'Full https URL the pill links to. Required if URL label is set; otherwise leave blank.',
      validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description:
        'Carousel slides shown in the detail pane. First image is the cover. Use ~4:3 screenshots; hotspot is enabled for focal-point cropping.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description:
                'Required for accessibility. Describe the screenshot in one short phrase.',
            },
          ],
        },
      ],
      options: {layout: 'grid'},
    }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'images.0', n: 'n'},
    prepare({title, subtitle, media, n}) {
      return {
        title: `${n ?? ''}  ${title ?? ''}`.trim(),
        subtitle,
        media,
      }
    },
  },
})
