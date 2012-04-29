(function($, document, window) {
  TestApp.AppStarter = {
    fixRouting: function () {
      console.log('fixRouting');
      try {
        $(document).bind("mobileinit", function () {
          $.mobile.ajaxEnabled = false;
          $.mobile.linkBindingEnabled = false;
          $.mobile.hashListeningEnabled = false;
          $.mobile.pushStateEnabled = false;
        });
      } 
      catch (e) {
        console.error('routing fix failed');
      }

    },
    startApp: function() {
      this.fixRouting();
      var router = new TestApp.AppRouter();
      new TestApp.HomeView({router: router});
    }
  }
})(jQuery, document, window, undefined);
