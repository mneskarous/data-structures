class Queue {

  constructor() {

    this.storage = {};
    this.start = 0;
    this.end = 0;

  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue() {
    var dequeued = this.storage[this.start];
    delete this.storage[this.start];
    this.size() && this.start++;
    return dequeued;
  }

  size() {
    return this.end - this.start;
  }

}
