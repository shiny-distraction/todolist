if (Todolist.Views.Tasks == undefined) {
    Todolist.Views.Tasks = {};
}

Todolist.Views.Tasks.IndexView = Backbone.View.extend({
    template: JST["backbone/templates/tasks/index"],

    initialize: function() {
        this.options.tasks.bind('reset', this.addAll);
    },

    addAll: function() {
        this.options.tasks.each(this.addOne);
    },


    addOne: function(task) {
        view = new Todolist.Views.Tasks.TaskView({model : task});
        this.$("tbody").append(view.render().el);
    },

    render: function() {
        $(this.el).html(this.template({tasks: this.options.tasks.toJSON()}));
        this.addAll();

        return this;
    }
});
