// Yeh question basically “closure” ka concept check kar raha hai — yani ek aisa function banana hai jo apni previous value yaad rakhe.

var createCounter = function (n = 10) {
  return function () {
    return n++;
  };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
