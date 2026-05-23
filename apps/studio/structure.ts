import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const SINGLETONS = ['about', 'contact'] as const

export const structure: StructureResolver = (S: StructureBuilder, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        S,
        context,
      }),
      S.divider(),
      S.listItem()
        .title('About')
        .id('about')
        .child(S.document().schemaType('about').documentId('about').title('About')),
      S.listItem()
        .title('Contact')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact').title('Contact')),
    ])

export const singletonTypes = new Set<string>(SINGLETONS)
