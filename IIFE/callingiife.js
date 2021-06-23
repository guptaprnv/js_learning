let i = 0;
var ans = (function (copyOfI) {
  copyOfI = 1;
  return function () {
    return copyOfI;
  };
})(i);
console.log("copyOfI: " + ans());


//invoking function without identifier
(function (copyOfI) {
  console.log(copyOfI);
})(i);


true &&
  (function (copyofi) {
    console.log(copyofi);
    return true;
  })(i);
