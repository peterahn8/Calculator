const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((x, y) => x * y, 1);
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
	let factArray = [x];
  if (x === 0) {
    return 1;
  }
  for (let i = 1; i < x; i++) {
    factArray.push(i)
  }
  return factArray.reduce((x, y) => x * y);
};