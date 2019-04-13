
var HashTable = function() {
  // maximum sizes/table with 8 slots
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  // first step is to get an index of LimitedArray
  // second is to assign that index to an empty array
  if (bucket === undefined) this._storage.set(index, []);
  bucket = this._storage.get(index);
  bucket.push([k,v]);
  // why can't we make this._storage.get(index) to bucket? Because bucket is permanently stored as undefined, so must be updated each time
  //third step is to set new value to the empty array
  
  // Overwrite values that have the same key
  for (var i = 0; i<this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get access to the index
  var bucket = this._storage.get(index);
  for (var i = 0; i<bucket.length; i++) {
    if (bucket[i][0] === k) return bucket[i][1];
  }
  return undefined; // does .retrieve return undefined even if we omit this line?
  // loop through the array
  // check if target key is equal to index 0 of inner array
  // if so, return index 1 of inner array
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // first step is to get the index
  var bucket = this._storage.get(index);
  
  // second loop through the bucket
  for (var i = 0; i < bucket.length; i++){
    // access to the 0 index of the inner array, and if it's equal to k
    if (bucket[i][0] === k){
     // slice the index that key value pairs located
     bucket.splice(i, 1);
    }
    
  }
  
 
  
   
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


