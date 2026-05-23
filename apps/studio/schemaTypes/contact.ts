import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  description:
    'Singleton. Powers the contact rows in the About panel and the hero availability footer.',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Primary contact email. Shown verbatim in the Email row of the About panel.',
      initialValue: 'shehzerabbasi621@gmail.com',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Direct line including country code, e.g. "+1 514 241 1019".',
      initialValue: '+1 514 241 1019',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      description: 'Full https URL to your GitHub profile.',
      initialValue: 'https://github.com/Shehzer-Aurangzeb',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'githubLabel',
      title: 'GitHub label',
      type: 'string',
      description:
        'Visible label for the GitHub row. Convention: the URL without the protocol, e.g. "github.com/Shehzer-Aurangzeb".',
      initialValue: 'github.com/Shehzer-Aurangzeb',
    }),
    defineField({
      name: 'githubHandle',
      title: 'GitHub handle',
      type: 'string',
      description: 'Bare username, no @, no URL. Used wherever just the handle is needed.',
      initialValue: 'Shehzer-Aurangzeb',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      description: 'Full https URL to your LinkedIn profile.',
      initialValue: 'https://www.linkedin.com/in/shehzar-aurangzeb-70009520b',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'linkedinLabel',
      title: 'LinkedIn label',
      type: 'string',
      description: 'Visible label for the LinkedIn row. Convention: "linkedin.com/in/handle".',
      initialValue: 'linkedin.com/in/shehzar-aurangzeb',
    }),
    defineField({
      name: 'linkedinHandle',
      title: 'LinkedIn handle',
      type: 'string',
      description: 'Bare handle from the LinkedIn vanity URL.',
      initialValue: 'shehzar-aurangzeb',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description:
        'City and region. Shown in the About contact rows and (uppercased) in the header clock label.',
      initialValue: 'Montréal, QC',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description:
        'Short status pill in the hero footer next to the green pulse dot. Examples: "Available · Q3 2026", "Booked through 2026".',
      initialValue: 'Available · Q3 2026',
    }),
  ],
  preview: {
    select: {title: 'email', subtitle: 'location'},
    prepare({title, subtitle}) {
      return {title: title ?? 'Contact', subtitle}
    },
  },
})
