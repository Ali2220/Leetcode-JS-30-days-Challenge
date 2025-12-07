// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function (promise1, promise2) {
  const num1 = await promise1;
  const num2 = await promise2;
  return num1 + num2;
};

addTwoPromises(Promise.resolve(5), Promise.resolve(2)).then((data) => {
  console.log(data);
});
