class Node
	attr_reader :data
	attr_accessor :left, :right
	
	def initialize data
		@data = data
	end
end

def array_to_tree(array, i = 0)
	# use your function from the previous challenge
	return nil if (i >= array.length || array[i] === 0)
	node = Node.new(array[i])
	node.left = array_to_tree(array, 2*i + 1)
	node.right = array_to_tree(array, 2*i + 2)
	return node
end

def search_tree?(array)
	root = array_to_tree(array)
  # write your code here
	search_helper(root)
end

def search_helper(node, min=nil, max=nil)
  return true if node.nil? # an empty node means the current branch is valid
  return false if min && node.data < min
  return false if max && node.data > max

  # the current node has been validated above.
  # the next step is to validate the left and right subtrees of the current node.
	search_helper(node.left, min, node.data) && search_helper(node.right, node.data, max)
end


puts search_tree?([10, 4, 12])
# => true

puts search_tree?([10, 5, 7])
# => false
