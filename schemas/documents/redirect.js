export default {
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  fields: [
    {
      name: 'redirectTo',
      title: 'Redirect To',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'guide' }],
    },
    {
      name: 'redirectPaths',
      type: 'array',
      title: 'Redirected Urls',
      description:
        'Upon landing on one of these URLs, the visitor will be redirected to the path selected below',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      slug: 'redirectTo.slug.current',
      type: 'redirectTo._type',
    },
    prepare({ slug, type }) {
      const path = type === 'page' ? '/' : '/guide/';

      return {
        title: `${path}${slug}`,
      };
    },
  },
};
