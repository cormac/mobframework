(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div data-role=\"header\">\n  <h1>Home</h1>\n</div>\n<div data-role=\"content\">\n  <div class=\"form\">\n    <form action=\"#page1\" method=\"POST\">\n      <input type=\"email\" name=\"email\" placeholder=\"enter email\">\n      <input type=\"password\" name=\"pass\" value=\"\">\n      <input type=\"submit\" name=\"submit\" class=\"login-submit\"  value=\"Log in\">\n    </form>\n  </div>\n    <a href=\"#page1\" data-role=\"button\">Page 1</a>\n</div>\n\n";});
})();