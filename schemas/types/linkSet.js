export default {
  name: 'linkSet',
  title: 'Link Set',
  type: 'object',
  fields: [
    {
      name: 'internal',
      title: 'Internal Link',
      type: 'internalLink',
    },
    {
      name: 'external',
      title: 'External Link',
      type: 'externalLink',
    },
  ],
};
