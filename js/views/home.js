(function($, document, window) {
  TestApp.HomeView = Backbone.View.extend({
    events: {
      "click .login-submit": "submit"
    },
    initialize: function(options){
      this.template = Handlebars.templates['login.tpl'];
      this.router = options.router;
    }, 
    submit: function() {
      var loginDetails = {
        username: $('input[name=email]').val(),
        password: $('input[name=pass]').val()
      }
      this.router.navigate("page1/1", {trigger: true});
    },
    render: function() {
      $(this.el).html(this.template({stuff: 'stuff'}));
      return this;
    }
  });
})(jQuery, document, window, undefined);
