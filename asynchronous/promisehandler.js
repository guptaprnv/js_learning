
function handlePromise(promise) {
  return 
  promise
  .then(value => {
      return value;
  })
  .catch(value => {
      return value;
  })
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
    handlePromise(Promise.all([promise1,promise2]));
    
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
