class Stack {
  constructor() {
    this.stack = [];
    this.length = this.stack.length;
  }

  push() {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  peak() {
    return this.stack[this.length - 1];
  }
}

const myStack = new Stack();

myStack.peak();
