function functionForResolve(value, response, error) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            response.push(value);
            error.push(undefined);
            resolve(1);
        },6000);
    })
}
function functionForReject(value, response, error) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            error.push(value);
            response.push(undefined);
            resolve(1);
        },2000);
    })
}
async function handlePromise(...promises) {
  let response = [];
  let error = [];
  for (let ind in promises) {
    await promises[ind]
      .then((value) => functionForResolve(value, response, error))
      .catch((value) => functionForReject(value, response, error));
  }
  
  return new Promise((resolve,reject) => {
      resolve([response, error]);
  });
}

async function makehandler() {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error 404");
    }, 6000);
  });

  console.log(1);
  const result = await handlePromise(promise1, promise2);
  //console.log(result);
  for (let indresult = 0; indresult < result[0].length; indresult++) {
    if (result[0][indresult] !== undefined) {
      console.log("promise" + indresult + "response: " + result[0][indresult]);
    } else {
      console.log("promise" + indresult + "rejected: " + result[1][indresult]);
    }
  }
}

makehandler();
