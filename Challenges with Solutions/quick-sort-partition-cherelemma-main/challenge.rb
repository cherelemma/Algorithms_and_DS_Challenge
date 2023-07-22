def partition(array)
  # write your code here
  pivot = array[0]
  pindex = 0
  
  (1...array.length).each do |i|
    if pivot >= array[i]
      j = i
      while j > pindex do
        array[j], array[j-1] = array[j-1], array[j]
        j -= 1
      end
      pindex += 1
    end
  end
 return array
end

p partition([4, 5, 3, 9, 1])
# => [3, 1, 4, 5, 9]
p partition([2, 10, 3, 7, 9, 4, 6, 12, 8])
# => [3, 1, 4, 5, 9]