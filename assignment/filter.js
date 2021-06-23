const filterGender = function (arr, fun, criteria, thisArg) {
  thisArg = thisArg || null;
  let indArr;
  const result = [];
  for (indArr in arr) {
    if (typeof arr[indArr] !== "function") {
      const ans = fun.apply(thisArg, [arr[indArr], criteria]);
      if (ans !== undefined) {
        result.push(ans);
      }
    }
  }
  return result;
};
var student = [
  {
    name: "id1",
    gender: "male",
  },
  {
    name: "id2",
    gender: "female",
  },
  {
    name: "id3",
    gender: "female",
  },
  {
    name: "id4",
    gender: "male",
  },
  {
    name: "id5",
    gender: "male",
  },
];
const finalResult = filterGender(
  student,
  function (element, compare) {
    if (element.gender === compare) {
      return element.name;
    } else {
      return undefined;
    }
  },
  "male"
);
console.log("finalResult: " + finalResult);

