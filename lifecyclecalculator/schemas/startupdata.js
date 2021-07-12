
export default {
  name: 'startupdata',
  title: 'Startup Data',
  type: 'document',
 

  fields: [


    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'baseamount',
      title: 'Base Amount',
      type: 'number',
    },
	    {
      name: 'hourlyfee',
      title: 'Hourly Fee',
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
