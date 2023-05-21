module.exports = function sum(number) {
  // write your code here
  if(number === 1) {
    return 1;
  }
  return number + sum(number-1)
}
