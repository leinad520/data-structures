var BinarySearchTree = function(value) {
  var binaryTree = Object.create(treeMethods);
  binaryTree.value = value;
  // a binary search tree (BST) where all values are lower than the current value
  binaryTree.left = null;

  binaryTree.right = null;
  
  return binaryTree;
};

var binaryTreeMethods = {
  
};

// A .left property, a binary search tree (BST) where all values are lower than the current value.

treeMethods.insert = function(val) {
  // first : if new value > root value it() goes right
  function helperFunc(node) {
    
  }
  if (val > this.value && this.right === null) {
    this.right = val;
    // create node and push the val to it??
  } else if (val < this.value && this.left === null) {
    this.left = val;
  } else {
    return 'error';
  }
  


  // and insert the new value if the right is null
  // else throw an error
  
  // if new value < root value it goes left
  // check if value is already found
  // and insert the new value if the left is null
  // else alert that this value is already found
};

//which accepts a value and places it in the tree in the correct position.
treeMethods.contains = function(value) {};

treeMethods.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Implement a binarySearchTree class with the following properties:
// A .left property, a binary search tree (BST) where all values are lower than the current value.
// A .right property, a BST where all values are higher than the current value.
// A .insert() method, which accepts a value and places it in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// What is the time complexity of the above functions?
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.