class Todolist.Models.Post extends Backbone.Model
  paramRoot: 'post'

  defaults:
    title: null
    content: null

class Todolist.Collections.PostsCollection extends Backbone.Collection
  model: Todolist.Models.Post
  url: '/posts'
