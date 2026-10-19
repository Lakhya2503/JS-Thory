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
    while (t1.next !== null) {
      console.log("HEAD :", t1.data);
      t1 = t1.next;
    }
    console.log("HEAD :", t1.data);
  }
}


let obj = new DoublyLinkList()
obj.insertAtEnd(10)
obj.insertAtEnd(20)
obj.insertAtEnd(30)
obj.printDoublyLinkList()