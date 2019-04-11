class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowerCount = 0;
  }

  enqueue(str) {
    this.storage[this.count] = str;
    this.count++;
  }

  dequeue() {
    let temp = this.storage[this.lowerCount];
    delete this.storage[this.lowerCount];
    if (this.lowerCount < this.count) this.lowerCount++;
    return temp;
  }

  size() {
    return this.count - this.lowerCount;
  }
}
