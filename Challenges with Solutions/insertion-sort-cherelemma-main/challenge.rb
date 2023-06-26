def sort_itself(array)
  for index in 1...array.length
    valueToInsert = array[index]
    holePosition = index
   
   while holePosition > 0 && valueToInsert < array[holePosition - 1]
     array[holePosition] = array[holePosition - 1]
     holePosition -= 1
   end
   array[holePosition] = valueToInsert
   puts array.join(' ')
 end  
end

sort_itself([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 2 3 4 6 9
