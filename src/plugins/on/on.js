/**
 * .on(event, callback)
 * 
 * Attach the callback to the event listener for each node
 * @param String event(s) the type of event ('click', 'submit', etc)
 * @param function callback function called when the event triggers
 * @return this Umbrella object
 */
u.prototype.on = function(events, callback) {
  
  return this.each(function(node){
    this.args(events).forEach(function(event){
      node.addEventListener(event, callback);
    });
  });
};
