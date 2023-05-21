let result;

module.exports = function hanoi_steps(numberOfDiscs) {
  // write your code here
  result = "";
  const res = move_disk(numberOfDiscs, "1", "2", "3");
  return res;
};

const move_disk = (number_of_discs, start, intermediate, goal) => {
  // base case:
  // if there's only one disk, just print the move text from start to goal
  if (number_of_discs === 1) {
    result += `${move_text(start, goal)}`;
    return result;
  }

  // step 1: move the n-1 disks of the current sub-problem onto the intermediate peg
  // note that, the intermediate peg of the current problem will be the goal peg of the sub-problem
  move_disk(number_of_discs - 1, start, goal, intermediate);

  // step 2: move the n-th disk of the current sub-problem onto the goal peg
  result += `${move_text(start, goal)}`;

  // step 3: move the n-1 disk from the intermediate peg to the goal peg
  // note that, the intermediate peg of the current problem will be the starting peg of the sub-problem
  move_disk(number_of_discs - 1, intermediate, start, goal);

  return result;
};

const move_text = (from, to) => `${from}->${to}\n`;
