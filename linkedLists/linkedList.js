class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const node = {
      value,
      next: this.head
    };
    this.head = node;
    this.length++;
  }

  append(value) {
    const node = {
      value,
      next: null
    };
    this.tail.next = node;
    node.next = null;
    this.tail = node;
    this.length++;
  }

  insert(value, index) {
    const node = {
      value,
      next: null
    };

    let currentNode = this.traverseToIndex(index);
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
  }

  remove(index) {
    let currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;

    // console.log("removing", currentNode);
  }

  reverse() {
    let length = this.length - 1;
    for (let i = this.length - 2; i > -1; i--) {
      let node = this.traverseToIndex(i + 1);
      this.append(node.value);
    }

    const node = this.traverseToIndex(this.length - length);
    this.head = node;
  }

  findThirdFromTheEnd() {
    let head = this.head;
    while (head.next.next.next) {
      head = head.next;
    }
    console.log(head);
  }

  traverseToIndex(index) {
    let currentNode = this.head; // we are referring the whole linked list, not to override it.
    let counter = 0;
    while (counter < index - 1) {
      currentNode = currentNode.next; // update current node
      counter++;
    }

    return currentNode;
  }

  printInArray() {
    let node = this.head;
    let array = [];
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    console.log(array);
  }
}

const myLinkedList = new LinkedList("head");
myLinkedList.append("down");
myLinkedList.append("throw");
myLinkedList.prepend("under");
myLinkedList.append("pounding");
myLinkedList.prepend("whenever");
myLinkedList.append("why");
myLinkedList.printInArray();
myLinkedList.findThirdFromTheEnd();
// myLinkedList.printInArray();
// myLinkedList.reverse();
// myLinkedList.remove(2);
// myLinkedList.printInArray();
