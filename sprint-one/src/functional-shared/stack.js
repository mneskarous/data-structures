var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  someInstance.length = 0;

  extend(someInstance, stackMethods);

  return someInstance;
}

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    return popped;
  },

  size: function() {
    return this.length;
  }
}
