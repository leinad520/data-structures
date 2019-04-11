var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count === 0) return undefined;
    let temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return temp;
  },
  size: function() {
    return this.count;
  }
};
