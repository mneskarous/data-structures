var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    delete storage[0];
    var position = Object.values(storage);
    for (var i = 0; i < position.length - 1; i++) {
        position[i] = position[i + 1];
    }
    return dequeued;
  };

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
