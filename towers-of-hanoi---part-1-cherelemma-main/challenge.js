 module.exports = function move(starting, goal) {
  // write your code here
  const intermediate = [1, 2, 3].filter((el)=>{
    if (el != starting && el != goal)
      return true;
  });
  
  let result = move_text (starting, intermediate);
  result += move_text (starting, goal);
  result += move_text (intermediate, goal);

  return result;
}

const move_text = (from, to) => `${from}->${to} `;
