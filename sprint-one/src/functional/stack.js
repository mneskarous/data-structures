var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
    length++;
  };

  someInstance.pop = function() {
    var popped = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    length--;
    return popped;
  };

  someInstance.size = function() {
    if (length < 0) {
      return 0;
    }
    return length;
  };

  return someInstance;
};
