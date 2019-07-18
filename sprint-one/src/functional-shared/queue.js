var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};

  someInstance.count1 = 0;
  someInstance.count2 = 0;
  someInstance.length = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var queueMethods = {
  enqueue: function(value) {
    this.count1++;
    this.storage[this.count1] = value;
    this.length++;
  },

  dequeue: function() {
    this.count2++;
    var dequeued = this.storage[this.count2];
    delete this.storage[this.count2];
    this.length--;
    return dequeued;
  },

size: function() {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
  }
};


