(function($, document, window) {
  if (TestApp === undefined) {
    TestApp = {};
  }
  TestApp.AppRouter = Backbone.Router.extend({
   
    routes:{
        "":"home",
        "page1/:dir":"page1",
        "store/:id/:dir":"store"

    },
 
    home:function () {
      var dir = '0';
      this.changePage(new TestApp.HomeView({router: this}), dir);

    },
 
    page1:function (dir) {
      this.changePage(new TestApp.PageView({router: this}), dir);
    },
 
    store:function (id, dir) {
      var model = TestApp.ShopCollection.get(id);
      this.changePage(new TestApp.StoreView({model: model}), dir);
    },
 

    changePage:function (page, dir) {
      //set the direction for our page transitions
      var reverse = (dir === '0') ? true: false;
      $(page.el).attr('data-role', 'page');
      page.render();
      $('body').append($(page.el));
      $.mobile.changePage($(page.el), 
      {
        changeHash:false,
        reverse: reverse
      });
    }
   
  });
})(jQuery, document, window, undefined);
