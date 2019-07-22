var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(binarySearchTreeMethods);

  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

var binarySearchTreeMethods = {
  insert: function(num) {
    var node = BinarySearchTree(num);
    var helper = function(obj) {
      if (num < obj.value) {
        if (obj.left === null) {
          obj.left = node;
      } else {
        helper(obj.left);
      }
      } else {
        if (obj.right === null) {
          obj.right = node;
      } else {
        helper(obj.right);
      }
      }
    };
    helper(this);
  },

  contains: function(target) {
    // same as insert except checking to see if value in tree
    if (target === this.value) {
      return true;
    } else if (target < this.value) {
      if (this.left !== null) {
        if (this.left.contains(target)) {
          return true;
        }
      }
      return false;
    } else if (target > this.value) {
      if (this.right !== null) {
        if (this.right.contains(target)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  },

  depthFirstLog: function(callback) {
    var helper = function(obj) {
      callback(obj.value);

      if (obj.left !== null) {
        helper(obj.left);
      }
      if (obj.right !== null) {
        helper(obj.right);
      }
    };
    helper(this);
  }

}



/*
 * Complexity: What is the time complexity of the above functions?
    insert: logarithmic
    contains: logarithmic
    depthFirstLog: linear
 */
