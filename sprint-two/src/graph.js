

// Instantiate a new graph
var Graph = function() {
  // edge
  this.edges = {};
  // node
  this.nodes = []; 
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i<this.nodes.length; i++) {
    if (this.nodes[i] === node) return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //to remove a node, we want to access the nodes array
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i] === node){
      // and remove it, which splice does
      this.nodes.splice(i, 1);
    }
  }
  //now we want to remove the edges connected to that node. how?
  //first, delete the whole array that has the key of deleted node
  
  
  delete this.edges[node];
  //second, loop through the array of all the keys that had deleted node as an edge and 
  

  for (var key in this.edges) {
    if (this.edges[key].includes(node)) {
      // third,delete the node from the array
      this.edges[key].splice(this.edges[key].indexOf(node), 1)
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edges[fromNode].includes(toNode));
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // loop through fromNodes array so to check if there are multiple edges
  for (var i = 0; i < this.edges[fromNode].length; i++ ){
    //if the toNode is present delete from array
    if (this.edges[fromNode].includes(toNode)){
      this.edges[fromNode].splice(i, 1); 
    }
  }
  for (var i = 0; i < this.edges[toNode].length; i++ ){
    if (this.edges[toNode].includes(fromNode)){
      this.edges[toNode].splice(i, 1); 
    }
  }  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // first we need to loop through nodes array
  for (var i = 0; i < this.nodes.length; i++){
    // run the call back function on each element
  
    cb(this.nodes[i]);
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Implement a graph class, in pseudoclassical style, with the following properties:
// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
// An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// What is the time complexity of the above functions?

