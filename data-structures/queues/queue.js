class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = {
      value,
      next: null
    };

    if (this.length === 0) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    const node = this.first;
    this.first = this.first.next;
    if (this.length === 1) this.last = null;
    this.length--;
    return node;
  }
}

const myQueue = new Queue();

// myQueue.enqueue("kesemay");
// myQueue.enqueue("hyloga");
// console.log(myQueue);

// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue);

module.exports = new Queue();
