var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  someInstance.sizeCount = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
    this.sizeCount++;
  },
  dequeue: function() {
    if (this.sizeCount === 0) return undefined;
    let temp = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    if (this.sizeCount > 0) this.sizeCount--;
    return temp;
  },
  size: function() {
    return this.sizeCount;
  }
};
