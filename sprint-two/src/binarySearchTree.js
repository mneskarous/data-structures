var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(binarySearchTreeMethods);
  // max 2 child nodes per node

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
        helper(obj.right)
      }
      }
    }
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
    // var helper = function(obj) {
    //   if (target === obj.value) {
    //     return true;
    //   } else if (target < obj.value) {
    //     if (helper(obj.left)) {
    //       return true;
    //     }
    //   } else {
    //     if (helper(obj.right)) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }


    // if target is equal to value
      // return true
    // else if target is less than value
      //
  },

  depthFirstLog: function(callback) {

  }

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
