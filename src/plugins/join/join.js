/**
 * Merge all of the nodes that the callback returns
 */
u.prototype.join = function(callback) {
  
  return u(this.nodes.reduce(function(newNodes, node, i){
    
    return newNodes.concat(callback(node, i));
  }, [])).unique();
};
