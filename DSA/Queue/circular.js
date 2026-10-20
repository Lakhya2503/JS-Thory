class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = Array(size).fill(null);
    this.front = -1;
    this.rear = -1;
  }

  enQueue(value) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("🧐 Queue is full");
    } else if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
      this.items[this.rear] = value;
      console.log("🗸 INSERT ITEM : ", this.items[this.rear]);
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = value;
      console.log(" 🗸 INSERT ITEM : ", this.items[this.rear]);
    }
  }

  deQueue(value) {
    if (this.front === -1) {
      console.log("🙁 Queue is Empty");
    } else if (this.front === this.rear) {
      console.log(" 🗙 DELETE ITEM : ", this.items[this.front]);
      this.front = this.rear = -1;
    } else {
      console.log("🗙 DELETE ITEM : ", this.items[this.front]);
      this.front = (this.front + 1) % this.size;
    }
  }
}

let cq = new CircularQueue(5);
cq.enQueue(10);
cq.enQueue(20);
cq.enQueue(30);
cq.enQueue(40);
cq.enQueue(50);

// cq.deQueue()
// cq.deQueue();
// cq.deQueue();
// cq.deQueue();
// cq.deQueue();
// cq.deQueue();
// cq.deQueue();
cq.enQueue(60);
cq.enQueue(70);
