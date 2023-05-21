class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function arrayToTree(array, i = 0) {
  if (i >= array.length || array[i] === 0) {
    return null
  }

  const node = new Node(array[i])
  node.left = arrayToTree(array, 2*i+1)
  node.right = arrayToTree(array, 2*i+2)

  return node
}

// helper function: find height of sub-tree
function height(node) {
	if (!node) return 0;
	
	// Get the height of the left and right subtree of the current node using recursion.
	let leftHeight = height(node.left);
	let rightHeight = height(node.right);
	
	// Choose the larger one and add the root height to it.
	if (leftHeight > rightHeight) return leftHeight  + 1
	else return rightHeight + 1;
}

function binaryTreeHeight(arrayTree) {
  // write your code here
  const tree = arrayToTree(arrayTree);
  return height(tree);
}

console.log(binaryTreeHeight([2, 7, 5, 2, 6, 0, 9]))
// => 3

console.log(binaryTreeHeight([2, 7, 5, 2, 6, 0, 9, 0, 8, 1, 4]))
// => 4

module.exports = binaryTreeHeight
