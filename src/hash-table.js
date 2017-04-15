/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    return (this.storage.get(index));
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(index, null);
  }
}

module.exports = HashTable;
