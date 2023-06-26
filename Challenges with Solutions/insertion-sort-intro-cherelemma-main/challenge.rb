def insertion_sort(array)
  # write your code here
  index = array.length - 1
  valueToInsert = array[index]
  while (index >= 0)
    if index != 0 && valueToInsert < array[index - 1]
      array[index] = array[index - 1]
      puts array.join(' ')
      index -= 1
    elsif
      array[index] = valueToInsert
      puts array.join(' ')
      break
    end
  end
end

insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3

puts '-' * 20

insertion_sort([1, 4, 6, 9, 3])
# => 1 4 6 9 9
#    1 4 6 6 9
#    1 4 4 6 9
#    1 3 4 6 9
