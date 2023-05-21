function findDuplicates(array) {
  // write your code here
  const mySet = new Set();
  const duplicates = array.filter((item) => {
      if(mySet.has(item)) {
        return true;
      }
      mySet.add(item)
      return false;
    });
  
  /* const duplicates = [];
  for (let i = 0; i < array.length; i = i + 1) {
    mySet.has(array[i]) ? duplicates.push(array[i]): mySet.add(array[i]);
  }
  */
  
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]))
// => [1, 5, 2]

console.log(findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43]))
// => [-43]

module.exports = findDuplicates
