class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = {};
      this.root.value = value;
      this.root.right = null;
      this.root.left = null;
      return;
    }

    let node = this.root;
    while (true) {
      if (node.value > value) {
        // insert to left
        if (!node.left) {
          node.left = {
            value,
            left: null,
            right: null
          };
          return;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = {
            value,
            left: null,
            right: null
          };
          return;
        }
        node = node.right;
      }
    }
  }

  lookup(value) {
    let node = this.root;
    while (node) {
      if (node.value === value) {
        return node;
      }
      if (value > node.value) {
        //go right
        node = node.right;
      } else {
        // go left
        node = node.left;
      }
    }

    return undefined;
  }

  remove(value) {
    if (!this.root) {
      return undefined;
    }
    // crazy shit will happen here
  }
}

const myBinary = new BinarySearchTree();
myBinary.insert(9);
myBinary.insert(3);
myBinary.insert(10);
myBinary.insert(12);
myBinary.insert(13);
myBinary.insert(14);
myBinary.insert(4);
console.log(JSON.stringify(myBinary));
console.log(myBinary.lookup(3));
