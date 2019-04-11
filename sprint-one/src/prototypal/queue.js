var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.count = 0;
  newInstance.lowerCount = 0;
  //newInstance.sizeCount = 0;
  return newInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.count] = val;
    this.count++;
    //this.sizeCount++;
  },
  dequeue: function() {
    let temp = this.storage[this.lowerCount];
    delete this.storage[this.lowerCount];
    if (this.lowerCount < this.count) this.lowerCount++;
    return temp;
  },
  size: function() {
    return this.count - this.lowerCount;
  }
};
