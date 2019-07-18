class Stack {

  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
  this.storage[this.length] = value;
  this.length++;
  }

pop() {
  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
  }

size() {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
  }

}

