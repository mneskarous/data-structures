

var HashTable = function() {

  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this._resizing = false;

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a bucket and set it to itself or an empty array
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if the key in the tuple is the input key
    if (tuple[0] === k) {
      // create an old value and set it to the value of the tuple
      var oldValue = tuple[1];
      // set the tuple's value to the input value
      tuple[1] = v;
      // return the old value
      return oldValue;
    }
  }
  // push the tuple into the bucket
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  // increment the size by 1
  this._size++;

  // if the size is greater than 3/4 of the storage limit
  if (this._size > 0.75 * this._limit) {
    // resize the storage limit to 2 * storage limit
    this._resize(this._limit * 2);
  }
  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if the tuple's key is the input key
    if (tuple[0] === k){
      // return the tuple's value
      return tuple[1];
    }
  }
  // otherwise, return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if the tuple's key is the input key
    if (tuple[0] === k) {
      // remove the tuple from the bucket
      bucket.splice(i, 1);
      // decrement the size by 1
      this._size--;
      // if the size is less than 1/4 of the storage limit
      if (this._limit > 8 && this._size < this._limit * 0.25) {
        // resize the storage limit by half
        this.resize(this._limit / 2);
      }
      // return the tuple's value
      return tuple[1];
    }
  }
};

HashTable.prototype.resize = function(newSize) {
  // if the table is not resizing
    // set resizing to true
    // set the storage limit to the newSize input
    // create a new storage
    // reset the size to 0
    // create a buckets variable and set it to storage
    // iterate through the buckets
      // iterate through the current bucket
        // insert the new tuple into the bucket
    // reset resizing back to false
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: linear
    retrieve: linear
    remove: linear
 */


