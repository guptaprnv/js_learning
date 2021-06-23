foo();
function foo() {
  console.log("foo");
}

//foo1();
var foo1 = function () {
  console.log("foo1");
};

function foo2() {
  function show() {
    console.log("show: 1");
  }
  show();
  function show() {
    console.log("show: 2");
  }
}
foo2();
