(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['page.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a href=\"#store/";
  stack1 = depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/1\">";
  stack1 = depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n    ";
  return buffer;}

  buffer += "<div data-role=\"header\">\n  <a data-role=\"button\" data-direction=\"reverse\" data-rel=\"back\" href=\"#\" data-icon=\"arrow-l\" data-iconpos=\"left\">Back</a>\n  <h1>Local Stores</h1>\n</div>\n<div data-role=\"content\">\n  <ul data-filter=\"true\" data-role=\"listview\" data-theme=\"g\">\n    ";
  foundHelper = helpers.shops;
  stack1 = foundHelper || depth0.shops;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n";
  return buffer;});
})();