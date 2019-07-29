var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    // create new node and set it to a new node object with the input value
    var newNode = Node(value);
    // if there is no head
    if (!list.head) {
      // set the head to the new node
      this.head = newNode;
    }
    // if there is a tail
      // set the new tail to the new node
    if (list.tail) {
      this.tail.next = newNode;
    }
    // otherwise, set the tail to the new node
    this.tail = newNode;
  };

  list.removeHead = function() {
    // create the current head and set it to the head
    var currentHead = this.head;
    // set the head to the node after the head
    this.head = this.head.next;
    // return the value of the current head
    return currentHead.value;
  };

  list.contains = function(target) {
    // set the current node to the head
    var currentNode = this.head;
    // while there is a current node
    while (currentNode) {
      // if the value of the current node is the target
      if (currentNode.value === target) {
        // return true
        return true;
      }
      // set the current node to the node after the current node
      currentNode = currentNode.next;
    }
    // return false;
    return false;
    };

    return list;
  };

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail: constant
    removeHead: constant
    contains: linear
 */
