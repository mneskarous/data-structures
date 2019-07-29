var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  this.length && this.length--;
  var popped  = this.storage[this.length];
  delete this.storage[this.length];
  return popped;
};

stackMethods.size = function() {
  return this.length;
};