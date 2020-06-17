export default {
    name: "formField",
    type: "object",
    title: "Form Field",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "This title populates the label"
      },
      {
        name: "placeholder",
        type: "string",
        title: "Placeholder",
        description: "This populates the example within the input box (not required for submit)"
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Give one word that describes this field (not required for submit)'
      },
      {
        name: 'inputType',
        title: 'Input Type',
        type: 'string',
        options: {
          list: ["text", "email", "tel", "textarea"]
        }
      },
      {
        name: 'fieldType',
        title: 'Field Type',
        type: 'string',
        options: {
          list: ['input', 'textarea']
        }
      },
      {
        name: 'required',
        title: 'Is this information required?',
        type: 'boolean'
      },
    ],
}
  