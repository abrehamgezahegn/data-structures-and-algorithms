class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
  }

  prepend(value) {
    // in front
    const node = {
      value,
      next: this.head,
      prev: null
    };
    this.head.prev = node;
    this.head = node;
  }

  append(value) {
    // at the back
    const node = {
      value,
      next: null,
      prev: this.tail
    };

    this.tail.next = node;
    this.tail = node;
  }

  printInArray() {
    let node = this.head; // console.log(this.tail);
    let array = [];
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    console.log(array);
  }

  insert(value, index) {
    let node = {
      value,
      next: null,
      prev: null
    };
    const currentNode = this.traverseToNode(index);
    node.next = currentNode;
    node.prev = currentNode.prev;
    currentNode.prev.next = node;
    currentNode.prev = node;
  }

  remove(index) {
    const currentNode = this.traverseToNode(index - 1);
    currentNode.next = currentNode.next.next;
    currentNode.next.prev = currentNode;
  }

  traverseToNode(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const doubleLinked = new DoublyLinkedList("Ego");
doubleLinked.prepend("justify");
doubleLinked.prepend("sun");
doubleLinked.append("thinking");
doubleLinked.append("out");
doubleLinked.prepend("one");
doubleLinked.insert("mean", 4);
doubleLinked.printInArray();

doubleLinked.remove(1);
doubleLinked.printInArray();

doubleLinked.remove(3);
doubleLinked.printInArray();
