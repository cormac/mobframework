(function($, document, window) {
  TestApp.HomeView = Backbone.View.extend({
    events: {
    },
    initialize: function(options){
      this.template = Handlebars.templates['login.tpl'];
      this.router = options.router;
    }, 
    submit: function() {
    },
    render: function() {
      $(this.el).html(this.template({stuff: 'stuff'}));
      return this;
    }
  });
})(jQuery, document, window, undefined);
