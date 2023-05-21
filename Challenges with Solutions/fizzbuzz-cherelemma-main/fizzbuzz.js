module.exports = function () {
  // write your code here
  let myArray = [];
  for (let i = 1; i <= 100; ++i)
  {
    if (i % 3 == 0 && i % 5 == 0)
    {
      myArray.push('FizzBuzz')
    }      
    else if (i % 5 == 0) {
      myArray.push('Buzz')
    }
    else if (i%3 == 0){
      myArray.push('Fizz')
    }
    else {
      myArray.push(i)
    }
  }
  return myArray;
};
