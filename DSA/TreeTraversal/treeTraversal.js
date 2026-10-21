class Node {
  constructor(value) {
    this.leftPointer = null;
    this.rightPointer = null;
    this.data = value;
  }
}
function printTree(root) {
  if (root !== null) {
      console.log(root.data);      
      printTree(root.leftPointer,);
      printTree(root.rightPointer);
  }
}

let root = new Node(1);
root.leftPointer = new Node(3);
root.rightPointer = new Node(4);
root.leftPointer.leftPointer = new Node(6);
root.leftPointer.rightPointer = new Node(5);
root.rightPointer.rightPointer = new Node(9);
printTree(root);
