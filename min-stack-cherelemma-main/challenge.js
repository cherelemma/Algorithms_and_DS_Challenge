class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
   }

  push(number) {
    let newNode = new Node(number)
    newNode.next = this.top;
    this.top = newNode;
  }
  
  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      return temp.value;
    }
    else {
      return false;
    }
  }
  
    min() {
    let current = this.top;
    let minValue = current.value;
    while (current.next) {
        if (minValue > current.next.value) {
            minValue = current.next.value;
        }
        current = current.next;
    }
    return minValue;
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
