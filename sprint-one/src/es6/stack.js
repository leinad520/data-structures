class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(str) {
    this.storage[this.count] = str;
    this.count++;
  }

  pop() {
    let temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) this.count--;
    return temp;
  }

  size() {
    return this.count;
  }
}
