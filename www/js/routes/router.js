(function($, document, window) {
  if (TestApp === undefined) {
    TestApp = {};
  }
  TestApp.AppRouter = Backbone.Router.extend({
   
    routes:{
        "":"home",
        "page1":"page1",
        "store/:id":"store"

    },
 
    home:function () {
      this.changePage(new TestApp.HomeView({router: this}));
    },
 
    page1:function () {
      this.changePage(new TestApp.PageView({router: this}));
    },
 
    store:function (id) {
      console.log(id);
      var model = TestApp.ShopCollection.get(id);
      this.changePage(new TestApp.StoreView({model: model}));
    },
 

    changePage:function (page) {
      $(page.el).attr('data-role', 'page');
      page.render();
      $('body').append($(page.el));
      $.mobile.changePage($(page.el), {changeHash:false});
    }
   
  });
})(jQuery, document, window, undefined);
