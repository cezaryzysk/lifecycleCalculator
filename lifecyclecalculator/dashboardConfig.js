"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  widgets: [

  {
    name: 'project-info'
  },
  {
    name: 'project-users',
      layout: {
        width: 'medium',
        height: 'auto'
      }
  },
      {
      name: 'document-list',
      options: {
        title: 'Recently edited pages',
        order: '_updatedAt desc',
		limit:10,
		types: ['landingpagedata']
 
      },
      layout: {
        width: 'medium',
        height: 'auto'
      }
    },
	      {
      name: 'document-list',
      options: {
        title: 'Recently edited pages',
        order: '_updatedAt desc',
		limit:10,
		types: ['question']
 
      },
      layout: {
        width: 'medium',
        height: 'auto'
      }
    },
  	      {
      name: 'document-list',
      options: {
        title: 'Recently edited answer',
        order: '_updatedAt desc',
		limit:10,
		types: ['answer']
 
      },
      layout: {
        width: 'medium',
        height: 'auto'
      }
    }
  ]
};
exports.default = _default;