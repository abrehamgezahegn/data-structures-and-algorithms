class Stack {
  constructor() {
    this.stack = ["asd", "ad", 12, 12];
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
