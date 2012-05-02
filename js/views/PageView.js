(function($, document, window) {
  TestApp.PageView = Backbone.View.extend({
    initialize: function(options){
      this.template = Handlebars.templates['page.tpl'];
      this.render();
    }, 
    render: function() {
      $(this.el).html(this.template(
        {
          shops: TestApp.ShopCollection.toJSON()
        }
      ));
      return this;
    }
  });
})(jQuery, document, window, undefined);
