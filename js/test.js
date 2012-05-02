(function() {
  TestApp = {};
  TestApp.Testy = {
    myAlert: function(alertText) {
      navigator.notification.alert(alertText);
    },
    getPosition: function() {
      var context = this;
      navigator.geolocation.getCurrentPosition(function(position) {
       context.lat = position.coords.latitude;
       context.longitude = position.coords.longitude;
       context.displayTplContent();
      });
    },
    displayTplContent: function() {
      console.log('tpl');
      var template = Handlebars.templates['login.tpl'];
      console.log('tpl');
      var templateVars = {
        title: 'Page title',
        content: 'blah blah',
        lat: this.lat,
        longitude: this.longitude
      };
      var html = template(templateVars);
      console.log(html);
      $('.handlebar-content').append(html);
    },
    pictureThis: function() {
      navigator.camera.getPicture( this.cameraSuccess, this.cameraError, 
        {quality: 50, destinationType: Camera.DestinationType.DATA_URL}
      );
    },
    cameraSuccess: function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    },
    cameraError: function(argument) {
      // body...
    }
  }
 
})();
