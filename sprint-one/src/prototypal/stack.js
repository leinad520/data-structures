var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.count = 0;
  return newInstance;
};

var stackMethods = {
  push: function(str) {
    this.storage[this.count] = str;
    this.count++;
  },
  pop: function() {
    let temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) this.count--;
    return temp;
  },
  size: function() {
    return this.count;
  }
};
