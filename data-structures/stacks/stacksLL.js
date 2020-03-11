class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const node = {
      value,
      next: null
    };

    if (this.length === 0) {
      this.top = node;
      this.bottom = this.top;
      this.length++;
      return;
    }

    let top = this.top;
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    if (this.length === 1) {
      const node = this.top;
      this.top = null;
      this.bottom = null;
      --this.length;
      return this;
    }

    this.top = this.top.next;
    --this.length;

    return this;
  }

  peak() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("mama");
myStack.push("thrift");
myStack.push("granpa");
console.log(myStack.peak());
// myStack.pop();
// myStack.pop();

// console.log(myStack);
