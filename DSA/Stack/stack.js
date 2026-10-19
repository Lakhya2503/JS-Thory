class Stack {
  constructor() {
    this.list = [];
  }

  lengthOfTheStack() {
    return this.list.length;
  }

  pushInStack(value) {
    this.list.unshift(value);
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
    return this.list.shift()
  }

}

let stack = new Stack()
stack.pushInStack(10)
stack.pushInStack(20)
stack.pushInStack(30)
stack.popTheStack()
stack.popTheStack()
console.log(stack.peekTheStack())