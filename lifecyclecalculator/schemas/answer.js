
export default {
  name: 'answer',
  title: 'Answer',
  type: 'document',
 

  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
	    {
      name: 'baseChanger',
      title: 'Base Value Changer',
      type: 'number',
    },
		    {
      name: 'baseMultiplier',
      title: 'Base Multiplier',
      type: 'number',
    },

  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
	  media: 'defaultProductVariant.images[0]',

    },
  },
}
