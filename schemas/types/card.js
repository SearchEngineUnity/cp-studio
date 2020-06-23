export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cardImage',
      title: 'Image',
      type: 'illustration',
    },
    {
      name: 'link',
      title: 'Link URL',
      type: 'url',
    },
    {
      name: 'btnText',
      title: 'Button Text / CTA text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
