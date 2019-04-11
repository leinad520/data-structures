var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.lowerCount = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Queue.prototype.dequeue = function() {
  let temp = this.storage[this.lowerCount];
  delete this.storage[this.lowerCount];
  if (this.lowerCount < this.count) this.lowerCount++;
  return temp;
};

Queue.prototype.size = function() {
  return this.count - this.lowerCount;
};
