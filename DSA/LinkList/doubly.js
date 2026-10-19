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

  insertionAtMid(value, pos) {
    let temp = new Node(value);
    let t = this.head;
    while (t.next !== null) {
      if (t.data === pos) {
        break;
      } else {
        t = t.next;
      }
      temp.next = t.next;
      t.next.prev = temp;
      t.next = temp;
      temp.prev = t;
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

  deletenode(value) {
    if (this.head === null) {
      console.log("LINK LIST IS EMPTY ....");
      return;
    }
    let t = this.head;
    if (t.data === value) {
      this.head = t.next;
      this.head.prev = null;
      return;
    }
    while (t.next !== null) {
      if (t.data === value) {
        t.prev.next = t.next;
        t.next.prev = t.prev;
        return;
      }
      else {
        t = t.next;
      }
    }
    if (t.data === value) {
      t.prev.next = null;
    }
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
obj.insertionAtMid(15, 10);
obj.deletenode(15)
obj.printDoublyLinkList();
