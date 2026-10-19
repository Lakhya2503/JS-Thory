//  FIFO
// First In Fiirst Out

// push() + shift()

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  insert(value) {
    this.items.push(value);
  }

  remove() {
    if (this.items.length === 0) return `Queue is Empty`;
    return this.items.shift();
  }
}


let queue = new Queue()
queue.insert(10)
queue.insert(20)
queue.insert(30)

console.log(queue.remove())
console.log(queue.remove())
console.log(queue.remove())
console.log(queue.remove())