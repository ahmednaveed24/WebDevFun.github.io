export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the blog post',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the post',
      options: {
        source: 'title',
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
