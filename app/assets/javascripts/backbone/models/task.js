Todolist.Models.Task = Backbone.Model.extend({
    paramRoot: 'task',

    defaults: {
        title: null,
        content: null
    }

});

Todolist.Collections.TasksCollection = Backbone.Collection.extend({
    model: Todolist.Models.Task,
    url: '/tasks'
});
