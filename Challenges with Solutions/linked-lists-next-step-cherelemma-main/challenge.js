// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
   constructor() {
     this.head = null;
     this.tail = null;
     this.length = 0;
    }

  add(number) {
    let newNode = new Node(number)
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    else {
      this.head = this.tail = newNode;
    }
    return newNode;
  }

  get(index) {
    let currentNode = this.head;
    while (currentNode) {
      if (this.length === index) {
        this.length = 0;
        return currentNode.value;
      }
      currentNode = currentNode.next;
      ++this.length;
    }
  }

  addAt(index, item) {
    let newNode = new Node(item);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    let currentNode = this.head;
    while (currentNode) {
      ++this.length;
      if (this.length === index) {
        this.length = 0;
        newNode.next = currentNode.next
        currentNode.next = newNode;
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  remove (index) {
    let currentNode = this.head;
    if (index === 0) {
      this.head = this.head.next;
      return current;
    }

    while (currentNode) {
      ++this.length;
      if (this.length === index) {
        this.length = 0;
        currentNode.next = currentNode.next.next;
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11
console.log(list.get(3))
// => 5

module.exports = LinkedList
