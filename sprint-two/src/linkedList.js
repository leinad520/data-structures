var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
// A linkedList class, in functional style, with the following properties:
// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?

  list.addToTail = function(value) {
    if (list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value)
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    let returnItem = list.head.value;
    list.head = list.head.next; // node
    return returnItem;
  };

  list.contains = function(target) {
    function helperFunc(node) {
      if (node === null) return false;
      if (node.value === target){
        return true;
      } 
      //if (node.next === null) {
        //return false;
      //}
      node = node.next;
      return helperFunc(node);
    }
    return helperFunc(list.head);
  
  // check if the head contains the target
  //  return true
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
  //  list.contains = function(target) {
  //   function helperFunc(x) {
  //     if (x.value === target){
  //       return true;
  //     } else if (x.value === null) {
  //       return false;
  //     } else {
  //       x = x.next;
  //       helperFunc(x);
  //     }
  //   } 
  //   helperFunc(list.head);
  // };
