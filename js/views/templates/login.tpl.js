(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div data-role=\"header\">\n  <h1>Home</h1>\n</div>\n<div data-role=\"content\">\n  <div class=\"form\">\n    \n      <input type=\"email\" name=\"email\" placeholder=\"Enter email...\">\n      <input type=\"password\" name=\"pass\" value=\"\" placeholder=\"Password...\">\n      <input type=\"submit\" name=\"submit\" class=\"login-submit\"  value=\"Log in\">\n  </div>\n</div>\n\n";});
})();