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
    return this.stack.pop();
  }
}

module.exports = Stack;
