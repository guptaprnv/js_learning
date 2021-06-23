let level = 5;
(function () {
  console.log("level: " + level);
  level--;
  if (level > 0) {
    arguments.callee();
  }
})();

//callee is not good to use

var global = this;

var sillyFunction = function (recursed) {
  if (!recursed) {
    return arguments.callee(true);
  }
  if (this !== global) {
    console.log("This is silly: " + this);
  } else {
    console.log("This is silly: the global");
  }
};

sillyFunction(false);

(function foo(recursed) {
  if (!recursed) {
    return foo(true);
  }
  if (this !== global) {
    console.log("This is foo: " + this);
  } else {
    console.log("This is foo: the global");
  }
})(false);

/*function constructor
function createPerson(sIdentity) {
    var oPerson = new Function('console.log(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();
*/
