

// Instantiate a new graph
var Graph = function() {

  this.storage = {};
  // this.length = 0;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node][node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage[node]) {
    if (this.storage[node][key] === true) {
      delete this.storage[key][node];
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode][toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.storage[fromNode] === undefined) {
    this.storage[fromNode][toNode] = false;
  }
  this.storage[fromNode][toNode] = false;
  this.storage[toNode][fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
      cb(this.storage[key][key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode: constant
    contains: constant
    removeNode: linear
    hasEdge: constant
    addEdge: constant
    removeEdge: constant
    forEachNode: linear
 */


