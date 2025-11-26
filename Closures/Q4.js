// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

let createCounter = (init) => {
  let current = init;

  return {
    increment: () => {
      current = current + 1;
      return current;
    },

    decrement: () => {
      current = current - 1;
      return current;
    },

    reset: () => {
      current = init;
      return current;
    },
  };
};

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
