class Stack {
  constructor() {
    this.stack = [];
    // this.length = this.stack.length;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peak() {
    return this.stack[this.stack.length - 1];
  }
}

const stackOne = new Stack();
const stackTwo = new Stack();

module.exports = { stackOne, stackTwo };
