var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count1 = 0;
  var count2 = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count1++;
    storage[count1] = value;
  };

  someInstance.dequeue = function() {
    count2++;
    var dequeued = storage[count2];
    delete storage[count2];
    return dequeued;
  }

  someInstance.size = function() {
    var size = 0;
      for (var key in storage) {
        if (storage.hasOwnProperty(key)) {
            size++;
        }
      }
      return size;
  };

  return someInstance;
};
