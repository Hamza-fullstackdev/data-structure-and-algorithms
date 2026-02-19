class Tree {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function preOrderTraversal(root) {
  if (root) {
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
  return;
}

function inOrderTraversal(root) {
  if (root) {
    preOrderTraversal(root.left);
    console.log(root.data);
    preOrderTraversal(root.right);
  }
  return;
}

function postOrderTraversal(root) {
  if (root) {
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
    console.log(root.data);
  }
  return;
}

let root = new Tree(1);
root.left = new Tree(3);
root.right = new Tree(5);
root.left.left = new Tree(2);
root.left.right = new Tree(4);
root.right.right = new Tree(8);

preOrderTraversal(root);
inOrderTraversal(root);
postOrderTraversal(root);
