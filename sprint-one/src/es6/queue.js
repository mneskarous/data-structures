class Queue {

  constructor() {

    this.storage = {};
    this.count1 = 0;
    this.count2 = 0;
    this.length = 0;

  }

  enqueue(value) {
    this.count1++;
    this.storage[this.count1] = value;
    this.length++;
  }

  dequeue() {
    this.count2++;
    var dequeued = this.storage[this.count2];
    delete this.storage[this.count2];
    this.length--;
    return dequeued;
  }

  size() {
    if (this.length < 0) {
      return 0;
    }
    return this.length;
  }

}
