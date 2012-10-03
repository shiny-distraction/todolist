if (Todolist.Views.Tasks == undefined) {
    Todolist.Views.Tasks = {};
}

Todolist.Views.Tasks.TaskView = Backbone.View.extend({
    template: JST["backbone/templates/tasks/task"],

    events: {
        "click .destroy" : "destroy"
    },

    tagName: "tr",

    destroy: function() {
        this.model.destroy();
        this.remove();

        return false;
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
