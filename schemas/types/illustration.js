import { MdImage } from 'react-icons/md';

export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'object',
  icon: MdImage,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
