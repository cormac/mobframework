(function($, document, window) {
  TestApp.HomeView = Backbone.View.extend({
    el: '.handlebar-content',
    events: {
      'click .login-submit': 'submit'
    },
    initialize: function(options){
      this.template = Handlebars.templates['login.tpl'];
      this.router = options.router;
      this.render();
    }, 
    submit: function() {
      console.log('submit');
      console.log(this.router);
      this.router.navigate("page1", {trigger: true});
    },
    render: function() {
      var html = this.template({});
      $(this.el).append(html);
      // body...
    }
  });
})(jQuery, document, window, undefined);
