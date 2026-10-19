class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
  }

  insertAtBeg(value) {
    let temp = new Node(value);
    if (this.head === null) {
      this.head = temp;
      return;
    } else {
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }
  }

  insertAtEnd(value) {
    let temp = new Node(value);
    if (this.head === null) {
      this.head = temp;
      return;
    }
    let t = this.head;

    while (t.next !== null) {
      t = t.next;
    }

    t.next = temp;
    temp.prev = t;
  }
  printDoublyLinkList() {
    let t1 = this.head;
    let output = "";

    while (t1 !== null) {
      output += t1.data + " <==> ";
      t1 = t1.next;
    }

    console.log("HEAD ==>", output + "NULL");
  }
}

let obj = new DoublyLinkList();
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtBeg(3);
obj.printDoublyLinkList();
