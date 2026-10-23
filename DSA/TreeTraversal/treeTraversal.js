class Node {
  constructor(value) {
    this.leftPointer = null;
    this.rightPointer = null;
    this.data = value;
  }
}
function preOrder(root) {
  if (root !== null) {
    console.log("PRE ORDER :", root.data);      
      preOrder(root.leftPointer,);
      preOrder(root.rightPointer);
  }
}

function inOrder(root) {
  if (root !== null) {
    inOrder(root.leftPointer,);
    console.log("IN ORDER :", root.data);      
      inOrder(root.rightPointer);
  }
}

function postOrder(root) {
  if (root !== null) {
    postOrder(root.leftPointer,);
    postOrder(root.rightPointer);
    console.log("POST ORDER :", root.data);      
  }
}


let root = new Node(1);
root.leftPointer = new Node(3);
root.rightPointer = new Node(4);
root.leftPointer.leftPointer = new Node(6);
root.leftPointer.rightPointer = new Node(5);
root.rightPointer.rightPointer = new Node(9);
// preOrder(root);
// inOrder(root)
// postOrder(root)

