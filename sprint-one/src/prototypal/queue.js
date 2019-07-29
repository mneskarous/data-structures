var Queue = function() {
  var someInstance = Object.create(queueMethods);

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
    var dequeued = this.storage[this.start];
    delete this.storage[this.start];
    this.size() && this.start++;
    return dequeued;
  };

  queueMethods.size = function() {
  return this.end - this.start;
  };


