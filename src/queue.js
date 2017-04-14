class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(obj) {
    this.queue.push(obj);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
