// Yahn pr closures ka concept lag rha hai.

var expect = function (val) {
  return {
    toBe: (value) => {
      if (value === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (value) => {
      if (value !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

const result = expect(5);
console.log(result.toBe(5));
console.log(result.notToBe(4));
