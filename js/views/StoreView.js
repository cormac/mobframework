(function($, document, window, undefined) {
  TestApp.StoreView = Backbone.View.extend({
    initialize: function () {
      this.template = Handlebars.templates['store.tpl'];
      // body...
    },
    render: function () {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
})(jQuery, document, window);
