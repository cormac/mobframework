// # API Test Suite 
//
// TestSuite for the Cashback Card API
// Ensure all calls to the CBC API are handled correctly
// Uses qunit to do the testing

// Test Connection to the API
asyncTest("can connect to api", 1, function() {
  var pass = "OoUieY1suO7CxZYX9rldf90fK0ED2veS";
  var username = "cbc_mobile";
  var verify_ssl = true;
  var uri = 'https://api.cashbackcard.com/api/v1/'; // Api uri
  var data = {
    hello: 'matey'
  };
  $.ajax({
    type: "POST",
    beforeSend: function(x) {      
      //x.setRequestHeader('Authorization',username + '/' + pass);  
    },
    dataType: 'jsonp',
    data: data,
    crossDomain: true,
    url: uri,
    username: username,
    password: pass,
    success: function (returnData, textStatus, jqXHR) {
      deepEqual( returnData, data, "video has loaded and is ready to play" );
      start();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      start();
    }
  });
});
test("simple test", function(){
  equal(0, 1, 'simple test run');
});
