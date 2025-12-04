// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

let once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
};

const add = (a, b) => a + b;
const onceAdd = once(add);
console.log(onceAdd(1, 2));
console.log(onceAdd(1, 2));
