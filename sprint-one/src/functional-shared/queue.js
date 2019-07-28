var Queue = function() {
  var someInstance = {};
  _.extend(someInstance, queueMethods);

  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  return someInstance;
  };

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var dequeued = this.storage[this.start];
  delete this.storage[this.start];

  this.size() && this.start++;

  return dequeued;
};

queueMethods.size = function() {
  return this.end - this.start;
};