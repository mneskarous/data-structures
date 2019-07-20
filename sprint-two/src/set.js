var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[this.length] === undefined) {
    this._storage[this.length] = item;
  }
  this.length++;
};

setPrototype.contains = function(item) {
  for (var value in this._storage) {
    if (item === value) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var removed = this._storage[this.length];
  this.length--;
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
