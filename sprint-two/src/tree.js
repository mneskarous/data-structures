var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create child and set it to a new tree object with the input as the value
  var child = Tree(value);
  // push the child into the children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // base case
  // if the value is the target
  if (this.value === target) {
    // return true
    return true;
  }
  // recursive case
  // iterate through the children array
  for (var i = 0; i < this.children.length; i++) {
    // if the current item in the children array contains the target
    if (this.children[i].contains(target)) {
      // return true
      return true;
    }
  }
  // return false
  return false;
};

treeMethods.traverse = function(callback) {
  // invoke the callback with the value as the parameter
  callback(this.value);
  // base case
  // if there is no children array
  if (!this.children) {
    // stop
    return;
  }
  // recursive case
  // otherwise, iterate through the children array
  for (var i = 0; i < this.children.length; i++) {
    // invoke the traverse method recursively on the current child
    this.children[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    addChild: constant
    contains: linear
 */
