class Stack {
  constructor() {
    this.stack = [];
  }

  get size() {
    return this.stack.length;
  }

  add(obj) {
    this.stack.push(obj);
  }

  remove() {

  }
}

module.exports = Stack;
