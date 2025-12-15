// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

var cancellable = function(fn, args, t) {
    // step 1: delay ke liye setTimeout
    const timer = setTimeout(() => {
        fn(...args);  // t ms ke baad fn run hoga
    }, t);

    // step 2: cancel function return karo
    const cancelFn = () => {
        clearTimeout(timer); // agar pehle call ho jaye → fn cancel
    };

    return cancelFn; // return cancel function
};

const myFn = (a, b) => console.log(a + b);

// schedule fn to run after 2000ms (2 sec)
const cancel = cancellable(myFn, [3, 4], 2000);

// Agar chaho cancel karna
setTimeout(() => {
    cancel(); // fn cancel ho jayega agar ye 2 sec se pehle call hua
    console.log("Cancelled!");
}, 1000);
