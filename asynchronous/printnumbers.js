function printNumber(i) {
  return new Promise((resolve, reject) => {
    let time = Math.random();
    time = time * 6000;
    setTimeout(
      (i) => {
        console.log(i);
        resolve(i + 1);
      },
      ((time % 1000) + 1000) % 1000,
      i
    );
  });
}
promise = printNumber(0);
for (let i = 1; i <= 10; i++) {
  promise = promise.then((number) => printNumber(number));
}
promise.then(printNumber);
