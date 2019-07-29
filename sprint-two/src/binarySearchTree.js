var BinarySearchTree = function(value) {
  var newBST = Object.create(newBSTMethods);

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  return newBST;
};

var newBSTMethods = {};

newBSTMethods.insert = function(num) {
  // if the input is less than the value
  if (num < this.value) {
    // if the left child's value is null
    if (this.left === null) {
      // the set the left child's value to the input
      this.left = BinarySearchTree(num);
  } else {
    // otherwise, create a left child and set the value to the input
    this.left.insert(num);
    }
    // if the input is more than the value
  } else {
    // if the right child's value is null
    if (this.right === null) {
      // set the right child's value to the input
      this.right = BinarySearchTree(num);
    } else {
      // otherwise, create a right child and set the value to the input
      this.right.insert(num);
      }
    }
};

newBSTMethods.contains = function(target) {
  // if the target is equal to the value
  if (target === this.value) {
    // return true
    return true;
    // else if the target is less than the value
  } else if (target < this.value) {
    // return the boolean value of the left child and the left child's children
    return !!(this.left && this.left.contains(target));
    // else if the target is greater than the value
  } else if (target > this.value) {
    // return the boolean value of the right child and the right child's children
    return !!(this.right && this.right.contains(target));
  }
};

newBSTMethods.depthFirstLog = function(callback) {
    // invoke the callback on the value
    callback(this.value);
    // if the left child is not null
    if (this.left !== null) {
      // invoke the callback on the children to the left
      this.left.depthFirstLog(callback);
    }
    // if the right child is not null
    if (this.right !== null) {
      // invoke the callback on the children to the right
      this.right.depthFirstLog(callback);
    }
};





/*
 * Complexity: What is the time complexity of the above functions?
    insert: logarithmic
    contains: logarithmic
    depthFirstLog: linear
 */
