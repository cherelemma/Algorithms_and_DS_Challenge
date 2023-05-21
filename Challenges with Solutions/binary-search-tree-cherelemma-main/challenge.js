class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  construct() {
   this.root = ''
  }

  insert(node, current = this.root) {
    //your code here
    if (!this.root) {
      this.root = node;
      return;
    }
    if(!current) {
      return node;
    }
    if (node.data < current.data) {
      current.left = this.insert(node, current.left);
    }
    else if (node.data > current.data) {
      current.right = this.insert(node, current.right);
    }
    return current;
  }

  preOrder(node = this.root) {
    //implementation from the previous challenge
    if (node === null) {
        return ''
      }

      let result = `${node.data} `
      result += this.preOrder(node.left)
      result += this.preOrder(node.right)
      return result
  }
}

function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
