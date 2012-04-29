(function($, document, window) {
  if (TestApp === undefined) {
    TestApp = {};
  }
  TestApp.AppRouter = Backbone.Router.extend({
   
    routes:{
        "":"home",
        "page1":"page1",
        "page2":"page2"
    },
 
    home:function () {
      console.log('page1');
      this.changePage(new TestApp.HomeView({router: this}));
    },
 
    page1:function () {
      console.log('page1');
      this.changePage(new TestApp.PageView({router: this}));
    },
 
    page2:function () {
      this.changePage(new TestApp.HomeView({router: this}));
    },
 

    changePage:function (page) {
      $(page.el).attr('data-role', 'page');
      page.render();
      $('body').append($(page.el));
      $.mobile.changePage($(page.el), {changeHash:false});
    }
   
  });
})(jQuery, document, window, undefined);
