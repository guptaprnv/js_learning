console.log("a: " + a);
var a = 1;
console.log("a: " + a);
function foo() {
  console.log("foo: " + a);
  var a = 2;
}
foo();

//console.log('b: '+b);
let b = 2;
console.log("b: " + b);

//const d=2;
//d=3;

//const can be mutated
const c = {
  name: "pranav",
};
c.name = "harry";
console.log("c.name: " + c.name);
