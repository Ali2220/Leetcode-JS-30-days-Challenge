// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume an input function: sum

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made

let memoize = function (fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key]; // return cached result
    }

    const result = fn(...args); // compute result
    cache[key] = result; // save to cache
    return result;
  };
};

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(2, 2));
