import {BlockElementIcon} from '@sanity/icons';
export default {
  name: 'landingpagedata',
  title: 'Landing Page Data',
  type: 'document',
  icon:BlockElementIcon,
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

  ],
  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'image',
    },
  },
}
