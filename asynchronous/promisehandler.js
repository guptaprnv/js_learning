async function promiseHandler(promiseArray) {
  for (ind in promiseArray) {
    promiseArray[ind] = promiseArray[ind].catch((error) => {
      return error;
    });
  }
  response = [];
  await Promise.all(promiseArray).then((values) => {
    response = values;
  });

  console.log(response);
}
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error 404");
  }, 2000);
});
promiseHandler([promise1, promise2]);
