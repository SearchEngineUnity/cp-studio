import { MdWeb } from 'react-icons/md'
import * as segments from '../segments'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MdWeb,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This is the title that shows up in navigation'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is the breadcrumb for this page. Will show as domain.com/slug'
    },
    {
      name: 'segments',
      type: 'array',
      title: 'Segments',
      description: 'Use the custom version should the segment be unique to this page. To reference a shared Segment, please create it first before referencing.',
      of: [
        {type: 'string'}
        // ...Object.values(segments).map(({ name, title }) => ({
        //   type: name,
        //   title: `${title}`
        // })),
      ]
    },
    {
      name: 'metaTags',
      type: 'meta',
      title: "Meta Tags",
      description: 'REQUIRED! Renders meta info in <head>'
    }
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: 'metaTags.openGraph.image'
    },
    prepare({ title, slug, media}) {
      slug = slug === '/' ? '/' : `/${slug}`
      return {
        title,
        subtitle: slug,
        media
      }
    }
  }
}
