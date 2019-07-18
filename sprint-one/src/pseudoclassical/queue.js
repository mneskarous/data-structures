var Queue = function() {

  this.storage = {};
  this.count1 = 0;
  this.count2 = 0;
  this.length = 0;

};

Queue.prototype.enqueue = function(value) {
  this.count1++;
  this.storage[this.count1] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
  this.count2++;
  var dequeued = this.storage[this.count2];
  delete this.storage[this.count2];
  this.length--;
  return dequeued;
}

Queue.prototype.size = function(){
  if (this.length < 0) {
    return 0;
  }
  return this.length;
}