var arr = [];
for (var indArr = 0; indArr < 2; indArr++) {
  arr[indArr] = (function (copyOfInd) {
    return function () {
      console.log("copyOfInd: " + copyOfInd);
    };
  })(indArr);
}
arr[0]();
arr[1]();
