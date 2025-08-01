const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total += current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function(a, b) {
  let result = 1;
  for(let i = b; i > 0; i--){
    result *= a;
  }
  return result;
};

const factorial = function(x) {
	if(x === 0){
    return 1;
  }else{
    for(let i = x-1; i >= 1; i--){
      x *= i;
    }
  return x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
