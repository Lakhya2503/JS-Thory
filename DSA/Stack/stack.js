
// LIFO
// Last In First Out
// push() + pop()

class Stack {
  constructor() {
    this.list = [];
  }

  lengthOfTheStack() {
    return this.list.length;
  }

  pushInStack(value) {
    this.list.push(value);
  }

  isEmptyStack() {
    if (this.list.length === 0) {
      throw new Error("Stack is empty");
    }
  }

  peekTheStack() {
    this.isEmptyStack();
    return this.list[0];
  }

  popTheStack(){
    this.isEmptyStack()
    return this.list.pop()
  }

}

let stack = new Stack()
stack.pushInStack(10)
stack.pushInStack(20)
stack.pushInStack(30)

// console.log(stack.peekTheStack())

console.log(stack.popTheStack())
console.log(stack.popTheStack())
console.log(stack.popTheStack())