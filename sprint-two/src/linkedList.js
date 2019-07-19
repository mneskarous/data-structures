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
    // for (var node in list) {
    //   if (target === node.value) {
    //     return true;
    //   }
    //   return false;
    // }

    // set current node to first node;
    var currentNode = list.head;
    // while there is a current node
      // if target === currentNode.value
        // return true
      // else if target !== currentNode.value
        // set current node to the next current node
      // in the event that
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      } else if (target !== currentNode.value) {
        currentNode = currentNode.next;
      }
      return false;
    }
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
