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
      title: 'Button',
      name: 'button',
      type: 'ctaButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
