class Node
  attr_reader :data
  attr_accessor :left, :right
  
  def initialize data
    @data = data
  end
end

# method to create a binary tree
def array_to_tree(array, i = 0)
	# use your function from the previous challenge
	return nil if (i >= array.length || array[i] === 0)
	node = Node.new(array[i])
	node.left = array_to_tree(array, 2*i + 1)
	node.right = array_to_tree(array, 2*i + 2)
	return node
end

# helper function: find height of sub-tree
def height(node)
	return 0 if (node.nil?)
	
	# Get the height of the left and right subtree 
	# of the current node using recursion.
	leftHeight = height(node.left)
	rightHeight = height(node.right)
	
	# Choose the larger one and add the root height to it.
	return leftHeight  + 1 if (leftHeight > rightHeight)
	return rightHeight + 1
end

def balanced_tree?(array)
  root = array_to_tree(array)
	
	# call a function to check if the tree is balanced BST or not
  balanced?(root)
end

def balanced? (node)
  return true if node.nil?
  left_height = height(node.left)   # calculate left subtree's height
  right_height = height(node.right)  # calculate right subtree's height
  return false if (left_height - right_height).abs > 1

  # Are the left and right subtree balanced? Check it using recursive
  balanced?(node.left) && balanced?(node.right)
end

puts balanced_tree?([1, 2, 0, 3, 4, 0, 0])
# => false

puts balanced_tree?([1, 2, 3, 4, 5, 6, 7])
# => true
