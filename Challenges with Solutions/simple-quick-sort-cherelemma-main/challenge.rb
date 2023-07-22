def simple_quicksort(arr)
  return arr if arr.length <= 1

  pivot = arr.shift
  left = []
  right = []

  arr.each do |num|
    if num < pivot
      left << num
    else
      right << num
    end
  end

  sorted_left = simple_quicksort(left)
  sorted_right = simple_quicksort(right)

  sorted_arr = sorted_left + [pivot] + sorted_right
  puts sorted_arr.join(' ')  # Print the array after partitioning

  return sorted_arr
end

# Test the implementation
arr = [5, 8, 1, 3, 7, 10, 2]
puts arr.join(' ')
simple_quicksort(arr)
