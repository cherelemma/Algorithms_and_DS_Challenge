const binaryTreeHeight = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('first_tree_of_fifteen_nodes', function () {
    // Failure message: 
    // Method call: binary_tree_height([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0])
    const arrayTree = [1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0]
    assert(binaryTreeHeight(arrayTree) === 4)
  })
  
  it('second_tree_of_fifteen_nodes', function () {
    // Failure message: 
    // Method call: binary_tree_height([5, 3, 2, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 5, 0])
    const arrayTree = [5, 3, 2, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 5, 0]
    assert(binaryTreeHeight(arrayTree) === 4)
  })
  
  it('tree_of_thirty_nodes', function () {
    // Failure message: 
    // Method call: binary_tree_height([1, 2, 3, 4, 0, 5, 6, 7, 8, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0])
    const arrayTree = [1, 2, 3, 4, 0, 5, 6, 7, 8, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0]
    assert(binaryTreeHeight(arrayTree) === 5)
  })
})
