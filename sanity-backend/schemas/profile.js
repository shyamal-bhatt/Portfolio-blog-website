export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [

      // Page Title
      { 
        title: 'Page Title',
        name: 'title',
        type: 'string'
        
      },

      // Name
      { 
        title: 'Name',
        name: 'name',
        type: 'string'
        
      },

      // About (Who am I)
      {
        name: 'desc',
        title: 'Profile Description',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },

      // Profile Image
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },

      // Name
      { 
        title: 'Job Role',
        name: 'jobRole',
        type: 'string'
        
      }

    ]
}

