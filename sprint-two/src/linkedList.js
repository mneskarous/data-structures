var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

list.contains = function(target) {
  var currentNode = list.head;
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
