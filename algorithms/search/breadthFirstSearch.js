const bst = require("../../data-structures/trees/binarySearchTree");
const queue = require("../../data-structures/queues/queue");

bst.insert(9);
bst.insert(3);
bst.insert(11);
bst.insert(5);
bst.insert(13);

// go through the binary list level by level

bst.breadthFirstSearch = () => {
  // hold the BST root;
  let currentNode = bst.root;
  let list = []; // to save node values
  queue.enqueue(currentNode); // save a node to traverse in a queue so we go though them in order
  while (queue.length > 0) {
    const item = queue.dequeue(); // pick the first inline
    currentNode = item.value; // queue returns items inside value field

    list.push(currentNode.value); // push node value inside our list
    if (currentNode.left) {
      // if the node has left node, enqueue it (left should come first)
      queue.enqueue(currentNode.left);
    }
    // same goes for right node
    if (currentNode.right) queue.enqueue(currentNode.right);
  }

  console.log(list);
};

bst.breadthFirstSearchR = (queue, list) => {
  if (queue.length === 0) {
    return list;
  }

  let item = queue.dequeue();
  let currentNode = item.value;
  while (queue.length > 0) {
    list.push(currentNode.value);
    if (currentNode.left) queue.enqueue(currentNode.left);
    if (currentNode.right) queue.enqueue(currentNode.right);
  }

  return bst.breadthFirstSearch(queue, list);
};
queue.enqueue(bst.root);
bst.breadthFirstSearchR(queue, []);

// bst.breadthFirstSearch();
