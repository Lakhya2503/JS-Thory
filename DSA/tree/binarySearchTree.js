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

function search(root, value) {
  if (root === null) {
    console.log("ELEMENT NOT FOUND 🙁");
    return;
  }
  if (root.data === value) {
    console.log("ELEMENT FOUND 🥳");
    return;
  }
  // if value is less than current root.data then go with left side
  if (root.data > value) {
    search(root.left, value);
    // else go with right side
  } else {
    search(root.right, value);
  }
}

function getSuccesser(root) {
  root = root.right;
  while (root.left !== null) {
    root = root.left;
  }
  return root;
}

function nodeDelete(root, value) {
  if (root === null) {
    return root;
  }

  if (root.data > value) {
    root.left = nodeDelete(root.left, value);
  } else if (root.data < value) {
    root.right = nodeDelete(root.right, value);
  } else {
    // left is node null
    if (root.left === null) {
      return root.right;
    }
    // right is node null
    else if (root.right === null) {
      return root.left;
    } else {
      let successor = getSuccesser(root);
      root.data = successor.data;
      root.right = nodeDelete(root.right, successor.data);
    }
    return root;
  }
}

// let root = new Node.insertFun(20)
// root.left = new Node(15)
// root.right = new Node(30)
// root.left.left = new Node(12)
// root.left.right = new Node(18)
// inOrder(root)

let root = insertFun(null, 10);
root = insertFun(root, 15);
root = insertFun(root, 8);
root = insertFun(root, 5);
root = insertFun(root, 16);
root = insertFun(root, 30);

inOrder(root, 15);
console.log();
nodeDelete(root, 10);
inOrder(root);
// sdearch(root, 15);
// search(root, 100);
