module.exports = function (num) {
  // write your code here
  let sum = 0, n1 = 1, n2 = 1;
  if (num == 0)
    sum = 0;
  else if (num == 1)
    sum = 1;
  else {
    sum = 1;
    while (n2 <= num)
    {  
      if (n2 % 2 == 1)
        sum += n2;

        n2 += n1;
        n1 = n2 - n1;
    }
  }
  return sum;
}
