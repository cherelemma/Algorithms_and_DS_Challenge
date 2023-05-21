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
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;