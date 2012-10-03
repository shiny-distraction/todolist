class Todo.Models.Post extends Backbone.Model
  paramRoot: 'post'

  defaults:
    title: null
    content: null

class Todo.Collections.PostsCollection extends Backbone.Collection
  model: Todo.Models.Post
  url: '/posts'
