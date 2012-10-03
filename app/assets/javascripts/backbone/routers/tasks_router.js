Todolist.Routers.TasksRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.tasks = new Todolist.Collections.TasksCollection();
        this.tasks.reset(options.tasks);
    },

    routes: {
        "new"      : "new",
        "index"    : "index",
        ":id/edit" : "edit",
        ":id"      : "show",
        ".*"       : "index"
    },

    index: function() {
        this.view = new Todolist.Views.Tasks.IndexView({tasks: this.tasks});
        $("#tasks").html(this.view.render().el);
    },

    // BELOW TODO

    new: function() {
        this.view = new Todolist.Views.Tasks.NewView({collection: this.tasks});
        $("#tasks").html(this.view.render().el);
    },

    show: function(id) {
        task = this.tasks.get(id);

        this.view = new Todolist.Views.Tasks.ShowView({model: task});
        $("#tasks").html(this.view.render().el);
    },

    edit: function(id) {
        task = this.tasks.get(id);

        this.view = new Todolist.Views.Tasks.EditView({model: task});
        $("#tasks").html(this.view.render().el)
    }
});
