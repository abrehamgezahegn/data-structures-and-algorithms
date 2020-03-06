const { stackOne, stackTwo } = require("../stacks/stackArray");

class Queue {
  constructor() {
    this.queue = stackOne;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    let item;
    if (stackTwo.stack.length === 0) {
      let counter = this.queue.stack.length;
      while (counter > 0) {
        stackTwo.push(this.queue.pop());
        counter--;
      }
    }

    item = stackTwo.pop();
    console.log(item);
  }
}

const myQueue = new Queue();

myQueue.enqueue("highpower");
myQueue.enqueue("stand");
myQueue.enqueue("for");
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue("oblivion");
