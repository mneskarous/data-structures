// Instantiate a new graph
var Graph = function() {
  // create a storage object
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if there is no node, add a node
    // else add a connection property
  this.storage[node] = this.storage[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return the boolean value of the node's value
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if the node is in the graph
  if (this.contains(node)) {
    // iterate through each node in the node's connections
    for (var targetNode in this.storage[node].edges) {
      // remove the connections from the node
      this.removeEdge(node, targetNode);
    }
    // remove the node
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if the graph doesn't contain the from node
  if (!this.contains(fromNode)) {
    // return false
    return false;
  }
  // otherwise, return the boolean value of the connection between the from node and the to node
  return !!this.storage[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if the graph doesn't contain a from node or to node
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    // stop
    return;
  }
  // otherwise, add a connection from the from node to the to node
  this.storage[fromNode].edges[toNode] = toNode;
  // and add a connection from the to node to the from node
  this.storage[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if the graph doesn't contain a from node or to node
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    // stop
    return;
  }
  // otherwise, remove the connection from the from node to the to node
  delete this.storage[fromNode].edges[toNode];
  // and remove the connection from the to node to the from node
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through each node in the graph
    // pass the current node into the callback function
  for (var node in this.storage) {
    // pass the current node into the callback function
    cb(node);
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


