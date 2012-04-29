(function($, document, window) {
  TestApp.PageView = Backbone.View.extend({
    el: '.handlebar-content',
    initialize: function(options){
      this.template = Handlebars.templates['page.tpl'];
      this.render();
    }, 
    render: function() {
      var html = this.template({});
      $(this.el).append(html);
      // body...
    }
  });
})(jQuery, document, window, undefined);
