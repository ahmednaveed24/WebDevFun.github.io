export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'Web Development - Frameworks',
      type: 'JS',
      title: 'Blog',
      description: 'Introduction to the blog page',
      validation: Rule => Rule.required()
    },
    {
      name: 'Ahmed Naveed',
      type: 'JS',
      title: 'My Experience',
      description: 'URL-friendly identifier for the post',
      options: {
        source: 'About My Experience',
        maxLength: 96
      }
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Name of the post’s author',
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedDate',
      type: 'datetime',
      title: 'Published Date',
      description: 'Date and time the post was published'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
      description: 'Main body content of the blog post'
    },
    {
      name: 'screenshot',
      type: 'image',
      title: 'Screenshot',
      description: 'Screenshot or related image for the post'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      description: 'Tags for categorizing the post'
    }
  ]
};
