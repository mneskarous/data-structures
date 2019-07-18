var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count1 = 0;
  var count2 = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count1++;
    storage[count1] = value;
    length++;
  };

  someInstance.dequeue = function() {
    count2++;
    var dequeued = storage[count2];
    delete storage[count2];
    length--;
    return dequeued;
  }

  someInstance.size = function() {
    if (length < 0) {
      return 0;
    }
    return length;
  };

  return someInstance;
};
