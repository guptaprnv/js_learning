function promise(callback) {
  let promiseObject = Object.create(null);
  promiseObject.value = undefined;
  promiseObject.flag = 0;
  const resolve = unboundResolve.bind(promiseObject);
  const reject = unboundReject.bind(promiseObject);
  callback(resolve, reject);
  function unboundResolve(valueForPass) {
    //console.log(this);
    this.value = valueForPass;
    //console.log(this);
  }
  function unboundReject(valueForPass) {
    this.flag = 1;
    this.value=valueForPass;
  }
  promiseObject.then = function(callbackthen1,callbackthen2) {
      if(this.flag === 0){
          callbackthen1(this.value);
      }
      else if(callbackthen2 !== undefined) {
          callbackthen2(this.value);
      }
      return this;
  }
  return promiseObject;
}
function checkNewPromise() {
  newPromise = new promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
  newPromise = newPromise.then(value => {
      console.log(value);
  });
}
checkNewPromise();
