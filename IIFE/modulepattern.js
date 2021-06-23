var foo = (function () {
  let i = 0;
  return {
    getI: function () {
      return i;
    },
    increment: function () {
      i++;
    },
    set: function () {
      i++;
    },
  };
})();

console.log("fooI: " + foo.getI());
foo.increment();
foo.increment();
console.log("fooI: " + foo.getI());
