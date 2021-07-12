export default {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
	    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
	

	
    {
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'answer'}],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'question.images[0]',
    },
  },
}
