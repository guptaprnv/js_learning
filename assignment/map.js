const map1Name = function (arr, fun, thisArg) {
  thisArg = thisArg || null;
  const result = [];
  let indArr;
  for (indArr in arr) {
    if (typeof arr[indArr] !== "function") {
      const ansFun = fun.apply(thisArg, [arr[indArr]]);
      result.push(ansFun);
    }
  }
  return result;
};

var student = [
  { name: "id1" },
  { name: "id2" },
  { name: "id3" },
  { name: "id4" },
  { name: "id5" },
];
/*
finalResult=map1.apply(
    student,
    [
        function(arr,element){
            return arr[element].name;
        },
    ]
)*/
finalResult = map1Name(student, function (arrObject) {
  return arrObject.name;
});
console.log("finalResult: " + finalResult);
