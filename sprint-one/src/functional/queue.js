var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  let enqueueCount = 0;
  let lowestCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueueCount] = value;
    enqueueCount++;
    count++;
  };

  someInstance.dequeue = function() {
    if (count === 0) return undefined;
    let temp = storage[lowestCount];
    delete storage[lowestCount];
    lowestCount++;
    if (count > 0) count--;
    //if (temp === undefined) debugger;
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
