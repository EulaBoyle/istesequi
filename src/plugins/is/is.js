// .is(selector)
// Check whether any of the nodes matches the selector
u.prototype.is = function(selector){
  return this.filter(selector).nodes.length > 0;
};