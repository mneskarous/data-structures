var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);

  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    this.length && this.length--;
    var popped = this.storage[this.length];
    delete this.storage[this.length];
    return popped;
  },

  size: function() {
    return this.length;
  }
}
