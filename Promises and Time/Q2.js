// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

async function sleep(millis) {
  return new Promise(function (res) {
    setTimeout(() => {
      res(1);
    }, millis);
  });
}

sleep().then((data) => {
  console.log(data);
});
