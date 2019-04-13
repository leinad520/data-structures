
var HashTable = function() {
  // maximum sizes/table with 8 slots
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // first step is to get an index of LimitedArray
  // second is to assign that index to an empty array
  if (this._storage.get(index) === undefined) this._storage.set(index, []);
  this._storage.get(index).push([k,v]);
  //third step is to set new value to the empty array
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // 
};


// Deleting a record from a hash table involves a combination 
// of search and insert functions.

// step 1 - We search for the record and delete it by freeing up the 
// table index that it is stored at


// step 2 - Next we probe forward and re-insert each subsequent 
// records in the table until we reach the next unoccupied slot.
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


