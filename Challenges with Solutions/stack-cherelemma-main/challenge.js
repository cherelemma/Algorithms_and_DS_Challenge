// Optionally: start with your code from LinkedList challenge.

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
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
