export default {
    name: 'social',
    title: 'Social Media Links',
    type: 'document',
    fields: [
        // Title
        {
          title: "Platform Name",
          name: "social_platform_name",
          type: "string",
        },
        {
            title: 'Profile URL',
            name: 'socialUrl',
            type: 'url'
        }
    ]
  }