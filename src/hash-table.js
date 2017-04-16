/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    const newLimit = (this.limit * 2);
    const newArray = new LimitedArray(newLimit);

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage) {
        const valuesArray = this.storage[i] || [];
        for (let j = 0; j < valuesArray.length; j++) {
          const key = valuesArray[j].key;
          const value = valuesArray[j].value;
          const index = getIndexBelowMax(valuesArray[j].key.toString(), newLimit);
          const currentValueArr = newArray.get(index);

          if (!currentValueArr) {
            newArray.set(index, [{ key, value }]);
          } else {
            for (let k = 0; k < currentValueArr.length; k++) {
              if (currentValueArr[k].value === value) return;
            }
            currentValueArr.push({ key, value });
            newArray.set(index, currentValueArr);
          }
        }
      }
    }

    this.storage = newArray;
    this.limit = newLimit;
  }

  insert(key, value) {
    // if two keys map to the same index in the storage, store a 2nd array as the value
    // make each key/value its own array that is nested inside of the array stored at that
    // index on the table
    const index = getIndexBelowMax(key.toString(), this.limit);
    const currentValueArr = this.storage.get(index);

    // check if we need to resize the hash table
    // current max fill is 75%
    let fullCells = 1;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    if (fullCells / this.limit > 0.75) this.resize();

    if (!currentValueArr) {
      this.storage.set(index, [{ key, value }]);
    } else {
      for (let i = 0; i < currentValueArr.length; i++) {
        if (currentValueArr[i].value === value) return;
      }
      currentValueArr.push({ key, value });
      this.storage.set(index, currentValueArr);
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
      if (currentValueArr[i].key === key) {
        currentValueArr[i].value = null;
      }
    }
  }
}

module.exports = HashTable;
