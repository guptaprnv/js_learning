let pending = 0,
  fulfilled = 1,
  rejected = 2;

function promise(callback) {
  const process = function () {
    while (this.queue.length) {
      let nextthen = this.queue.shift();
      if (nextthen.name === "then") {
        let value;
        if (this.state === fulfilled) {
          value = nextthen.fulfilled.call(this, this.value);
        } else if (rejected != undefined) {
          value = nextthen.rejected.call(this, this.value);
        } else {
          continue;
        }
        this.value = value;
      }
      else {
        if(this.state === rejected) {
          let value = nextthen.rejected.call(this, this.value);
          this.value = value;
        }
      }
    }
  };
  let resolve = function (value) {
    this.value = value;
    this.state = fulfilled;
    this.process();
  };
  let reject = function (value) {
    this.value = value;
    this.state = rejected;
    this.process();
  };

  const then = function (handleResolved, handleRejected) {
    this.queue.push({
      name: "then",
      fulfilled: handleResolved,
      rejected: handleRejected,
    });
    return this;
  };

  const Catch = function (handleRejected) {
    this.queue.push({
      name: "catch",
      rejected: handleRejected
    });
    return this;
  };
  let promiseObject = Object.create(null);
  promiseObject.state = pending;
  promiseObject.value = null;
  promiseObject.queue = [];
  promiseObject.process = process;
  promiseObject.then = then;
  promiseObject.Catch = Catch;
  let boundresolve = resolve.bind(promiseObject);
  let boundreject = reject.bind(promiseObject);
  setTimeout(() => {
    callback.call(promiseObject, boundresolve, boundreject);
  }, 0);
  return promiseObject;
}
promise1 = new promise(function (resolve, reject) {
  //console.log(1);
  resolve("hello");
});
promise2 = promise1.then(function (value) {
  console.log(value);
  return value + value;
});
promise3 = promise2.then(function (value) {
  console.log(value);
  return value + value;
});
//console.log(promise3);
promise4 = promise3.Catch(function (value) {
  console.log(value);
  return value;
});
