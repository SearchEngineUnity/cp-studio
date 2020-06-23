export default {
  name: 'chapter',
  title: 'Chapter',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Chapter Title',
      type: 'text',
      description: 'This is used as the Chapter Navigation title',
    },
    {
      name: 'chapterGuide',
      title: 'Chapter Guide',
      type: 'reference',
      to: [{ type: 'guide' }],
    },
  ],
};
