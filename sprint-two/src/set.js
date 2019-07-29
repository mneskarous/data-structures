var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // set the set's value at the item key to true
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  // return the boolean value of the set's value at the item key
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  // delete the value of the set at the item key
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
    add: constant
    contains: linear
    remove: constant
 */
