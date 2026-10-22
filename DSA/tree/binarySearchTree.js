class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function insertFun(root, value) {
  if (root === null) {
    return new Node(value);
  }
  if (root.data === value) {
    return root;
  }
  // if value is less than current root.data then go with left side
  if (root.data > value) {
    root.left = insertFun(root.left, value);
    // else go with right side
  } else {
    root.right = insertFun(root.right, value);
  }
  return root;
}

function inOrder(root) {
  if (root !== null) {
    inOrder(root.left);
    console.log("IN ORDER :", root.data);
    inOrder(root.right);
  }
}

// let root = new Node.insertFun(20)
// root.left = new Node(15)
// root.right = new Node(30)
// root.left.left = new Node(12)
// root.left.right = new Node(18)
// inOrder(root)

let root = insertFun(null, 20);
root = insertFun(root, 30);
root = insertFun(root, 35);
root = insertFun(root, 85);
root = insertFun(root, 96);
root = insertFun(root, 65);
root = insertFun(root, 87);
inOrder(root);
