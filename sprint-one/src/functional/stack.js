var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    length && length--;
    var popped = storage[length];
    delete storage[length];
    return popped;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
