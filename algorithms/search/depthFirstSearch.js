/*
pros 
 - path existence check (eg. maze solving)
 - less memory

cons 
  - could get slow

*/

const bst = require("../../data-structures/trees/binarySearchTree");
const queue = require("../../data-structures/queues/queue");

bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);

/*
            9
        4        20
      1   6   15    170
  
*/

bst.depthFirstSearchInOrder = (node, list) => {
  console.log(list);
  if (node.left) {
    console.log("left", node.left.value);
    bst.depthFirstSearchInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    console.log("right", node.right.value);
    bst.depthFirstSearchInOrder(node.right, list);
  }
  return list;
};

bst.depthFirstSearchPreOrder = (node, list) => {
  console.log(list);
  list.push(node.value);
  if (node.left) {
    bst.depthFirstSearchPreOrder(node.left, list);
  }
  if (node.right) {
    console.log("right", node.right.value);
    bst.depthFirstSearchPreOrder(node.right, list);
  }
  return list;
};

bst.depthFirstSearchPostOrder = (node, list) => {
  console.log(node.value, list);
  if (node.left) {
    if (node.left.value > node.value) return "Invalid tree";
    bst.depthFirstSearchPostOrder(node.left, list);
  }
  if (node.right) {
    if (node.right.value < node.value) return "Invalid tree";
    bst.depthFirstSearchPostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
};

// console.log(bst.depthFirstSearchInOrder(bst.root, []));
// console.log(bst.depthFirstSearchPreOrder(bst.root, []));
console.log(bst.depthFirstSearchPostOrder(bst.root, []));
