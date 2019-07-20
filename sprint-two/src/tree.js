var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // var findTarget = function(newTree) {
  // var matches = true;
  // if (target === newTree.value) {
  //   return true;
  // } else if (newTree.children.length) {
  //   for (var i = 0; i < newTree.children.length; i++) {
  //     findTarget(newTree.children[i]);
  //   }
  // }
  // }
  // var findTarget = function(treeObj) {
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
    return false;
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
