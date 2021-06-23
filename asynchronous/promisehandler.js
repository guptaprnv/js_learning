
async function handlePromise(...promises) {
  let response = [];
  let error = [];
  for (let ind in promises) {
    let promise=promises[ind];
    await promise
    .then((value) => {
        response.push(value);
        error.push(undefined);
    })
    .catch((value) => {
        error.push(value);
        response.push(undefined);
    })
  }
  return [response, error];
}

async function makehandler() {
    let promise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(2);
        },3000)
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error 404');
        },6000)
    });
    
    console.log(1);
    //promise1 = await promise1;
    //promise2 = await promise2;
    const result = await handlePromise(promise1,promise2);
    
    for(let indresult = 0; indresult < result[0].length; indresult++){
        if(result[0][indresult] !== undefined) {
            console.log('promise'+indresult+'response: '+result[0][indresult]);
        }
        else{
            console.log('promise'+indresult+'rejected: '+result[1][indresult]);
        }
    }
}

makehandler();
