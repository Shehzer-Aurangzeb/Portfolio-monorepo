import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Simple Icons Slug',
              type: 'string',
              description:
                "Icon slug from simpleicons.org (e.g. 'react', 'typescript'). Leave empty for no icon.",
            }),
            defineField({
              name: 'color',
              title: 'Icon Color',
              type: 'string',
              description:
                "Hex color for the icon (e.g. '#61DAFB'). Defaults to text color if empty.",
            }),
          ],
          preview: {
            select: {
              title: 'name',
              icon: 'icon',
            },
            prepare({title, icon}) {
              return {
                title,
                subtitle: icon || 'No icon',
              }
            },
          },
        },
      ],
    }),
    orderRankField({type: 'skill'}),
  ],
  preview: {
    select: {
      title: 'category',
      skills: 'skills',
    },
    prepare({title, skills}) {
      return {
        title,
        subtitle: `${skills?.length || 0} skills`,
      }
    },
  },
})
