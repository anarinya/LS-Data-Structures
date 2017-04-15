class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    const temp = { value, next: null };
    if (this.head === null) this.head = temp;
    if (this.tail === null) {
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
  }

  removeHead() {
    const temp = this.head;
    if (this.head === null) {
      return undefined;
    }
    if (this.head.next) {
      this.head = this.head.next;
    }
    return temp.value;
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

module.exports = LinkedList;
