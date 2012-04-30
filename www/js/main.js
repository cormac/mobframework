(function($, document, window) {
  TestApp.AppStarter = {
    startApp: function() {
      var router = new TestApp.AppRouter();
      Backbone.history.start()
      router.navigate("", {trigger: true});
    }
  }
})(jQuery, document, window, undefined);
