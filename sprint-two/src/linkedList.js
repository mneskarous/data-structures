var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

list.contains = function(target) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === target) {
        return true;
    }
      currentNode = currentNode.next;
    }
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
    Linear
 */
