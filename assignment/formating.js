const formating = function (arr, fun, thisArg) {
  thisArg = thisArg || null;
  let indArr;
  const result = [];
  for (indArr in arr) {
    if (typeof arr[indArr] === "object") {
      result.push(fun.call(thisArg, arr[indArr]));
    }
  }
  return result;
};

var student = [
  {
    name: "idfront1 idback1",
    gender: "male",
    title: "good",
  },
  {
    name: "idfront2 idback2",
    gender: "female",
    title: "bad",
  },
  {
    name: "idfront3 idback3",
    gender: "female",
    title: "bad",
  },
  {
    name: "idfront4 idback4",
    gender: "male",
    title: "bad",
  },
  {
    name: "idfront5 idback5",
    gender: "male",
    title: "good",
  },
];
var result = formating(student, function (arrObject) {
  formatedObject = {};
  splitWords = arrObject.name.split(" ");
  formatedObject.name = splitWords[splitWords.length - 1];
  formatedObject.title = arrObject.title;
  return formatedObject;
});
let indResult;
for (indResult = 0; indResult < result.length; indResult++) {
  console.log(result[indResult]);
}
