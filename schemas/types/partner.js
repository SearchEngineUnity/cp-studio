export default {
    name: 'partner',
    title: 'Partner',
    type: 'object',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string'
        },
        {
            name: 'image',
            title: 'Company Logo',
            type: 'image'
        },
        {
            name: "webUrl",
            title: "Partner's Web URL",
            type: 'url'
        },
    ],
    preview: {
        select: {
            title: 'title',
        }
    }    
}
