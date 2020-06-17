export default {
    title: 'Text Block', 
    name: 'textBlock',
    type: 'object', 
    fields: [
        {
            name: "copy",
            title: "Content Copy",
            type: "fullBlockContent"
        }
    ],
    preview: {
        select: {
          title: 'copy',
          subtitle: '_type'
        }
      }
}