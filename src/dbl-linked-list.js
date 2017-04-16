class DblLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
     };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.head.next === null) {
      this.head.next = newNode;
      this.tail = newNode;
      this.tail.prev = this.head;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    const oldNode = this.head;
    if (this.head === null) {
      return undefined;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      this.head.prev = null;
      return oldNode.value;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return oldNode.value;
  }

  contains(value) {
    if (this.head === null) {
      return undefined;
    }
    let currentNode = this.head;
    do {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    } while (currentNode.next !== null);
    return false;
  }
}

module.exports = DblLinkedList;
