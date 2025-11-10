// 💡 JS Concept used:

// 👉 Closure
// (ek function ke andar dusra function jo outer function ke scope ko “yaad” rakhta hai)

// Aur saath hi:
// 👉 Higher-Order Function bhi hai
// (kyunki ek function dusra function return kar raha hai)

function createHelloWorld() {
  return function () {
    return 'hello world';
  };
}

const hello = createHelloWorld();
console.log(hello());
