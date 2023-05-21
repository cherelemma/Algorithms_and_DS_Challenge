module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number);
};

function sqrt_recursive(number, min_interval, max_interval) {
  if (number < 0) return NaN;

  if (number === 0 || number === 1) return num;

  while (min_interval <= max_interval) {
    let midle = Math.floor((min_interval + max_interval) / 2);
    if (midle * midle === number) {
      return midle;
    }

    if (midle * midle < number) {
      min_interval = midle + 1;
    } else {
      max_interval = midle - 1;
    }
  }
}
