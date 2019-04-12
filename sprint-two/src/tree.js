var Tree = function(value) { 
  // declare new node called newTree
  var newTree = {}; 
  // each node has a property of value
  newTree.value = value;

  // each node has property of children
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

// Store the methods in an object to use the functional shared method
var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node
  // Create a new tree node, and add it as a child of node with children array and value
  var newTree /*target of a node*/ = Tree(value)// any value;
  
  //  and adds that node as a child of the tree
  this.children.push(newTree)
  
};

treeMethods.contains = function(target) {
  // Declare a helper function which checks if the value of any of the nodes is equal to the target
  var findNodeValues = function(rootTree) {
    if (rootTree.value === target) {
      return true;
    } else {
      for (var i = 0; i<rootTree.children.length; i++) {
        var child = rootTree.children[i];
        var result = findNodeValues(child);
        if (result === true) return true;
      }
      return false;
    }
  }
  return findNodeValues(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// A tree class, in functional with shared methods style, with the following properties:
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
// What is the time complexity of the above functions? 

// Question: Why doesn't this work?
  // var findNodeValues = function(rootTree) {
  //   if (rootTree.value === target) {
  //     return true;
  //   } else {
  //     for (var i = 0; i<rootTree.children.length; i++) {
  //       var child = rootTree.children[i];
  //       //var result = 
  //       return findNodeValues(child);
  //     }
  //     return false;
  //   }
  // }
  // return findNodeValues(this);
// };