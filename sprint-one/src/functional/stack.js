var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  let count = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return undefined;
    }

    let temp = storage[count - 1];
    delete storage[count - 1];
    count--;
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

// let danEx = Stack()
// //danEx is {} with methods
// danEx.push('hi')
// //storage in danEx = {[0]: 'hi'}
// danEx.size()
// //1
