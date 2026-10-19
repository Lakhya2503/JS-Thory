// linear data structure

// not on a contiguose manner

// node => data
// node => pointer => store the ddress of next node

// insertion , deletetion  use => linked list
// searching , finding => array

class Node {
  constructor(info, next = null) {
    this.info = info;
    this.next = next;
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head;
  }

  insertionAtEnd(value) {
    let temp = new Node(value);
    if (this.head !== null) {
      let t1 = this.head;
      while (t1.next !== null) {
        t1 = t1.next;
      }
      t1.next = temp;
    } else {
      this.head = temp;
    }
  }

  insertionInMid(value, x) {
    let temp = new Node(value);
    let t1 = this.head;
    while (t1.next !== null) {
      if (t1.info === x) {
        temp.next = t1.next;
        t1.next = temp;
      }
      t1 = t1.next;
    }
  }

  insertionAtBeg(value) {
    let temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  }

  deleteLinkList(value) {
    let t1 = this.head;
    let prev = t1;
    if (this.head === value) {
      this.head = t1.next;
    }
    while (t1.next !== null) {
      if (t1.info === value) {
        prev.next = t1.next;
        break;
      } else {
        prev = t1;
        t1 = t1.next;
      }
    }
    if (t1.info === value) {
      prev.next = null;
    }
  }

  printLinkList() {
    let t1 = this.head;
    while (t1.next !== null) {
      console.log("HEAD :", t1.info);
      t1 = t1.next;
    }
    console.log("HEAD :", t1.info);
  }
}

let obj = new LinkList();
obj.insertionAtEnd(10);
obj.insertionAtEnd(20);
obj.insertionAtEnd(30);
obj.insertionAtBeg(325);
obj.insertionInMid(40, 10);
obj.deleteLinkList(30);
obj.printLinkList();
