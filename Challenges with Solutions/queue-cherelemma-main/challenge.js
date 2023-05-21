// Start with your code from LinkedList challenge.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
   }

  add(number) {
    let newNode = new Node(number)
    if (this.tail === null) {
      this.head = this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  remove() {
    if (this.head === null) {
        return -1;
      }
      let current = this.head;
      this.head = this.head.next;
      
      if (this.head === null) {
        this.tail = null;
      }
      return current.value;
    }
}

const queue = new Queue()
queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
