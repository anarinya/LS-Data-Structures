/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('./linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    // if two keys map to the same index in the storage, store a 2nd array as the value
    // make each key/value its own array that is nested inside of the array stored at that
    // index on the table
    const index = getIndexBelowMax(key.toString(), this.limit);
    const currentValueArr = this.storage.get(index);

    if (!currentValueArr) {
      this.storage.set(index, [{ key, value }]);
    } else {
      for (let i = 0; i < currentValueArr.length; i++) {
        if (currentValueArr[i].value === value) return;
      }
      this.storage.set(index, [{ key, value }]);
    }
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const currentValueArr = this.storage.get(index);
    for (let i = 0; i < currentValueArr.length; i++) {
      if (currentValueArr[i].key === key) return currentValueArr[i].value;
    }
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const currentValueArr = this.storage.get(index);
    for (let i = 0; i < currentValueArr.length; i++) {
      if (currentValueArr[i] === key) return currentValueArr[i].pop();
    }
  }
}

module.exports = HashTable;
