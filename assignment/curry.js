

function add(a, b, c, d) {
  return a + b + c + d;
}
function curry(args) {
  let slice = Array.prototype.slice;
  args = slice.apply(arguments);
  if (args.length >= 4) {
    return add.apply(null, args);
  }
  return function () {
    args = args.concat(slice.apply(arguments));
    return curry.apply(null, args);
  };
}
let ans = curry(2)(3)(4, 5);
console.log(ans);

function curry1(args) {
  let slice = Array.prototype.slice;
  args = slice.apply(arguments);
  if (args.length >= 5) {
    return args[0].apply(null, args.slice(1));
  }
  return function () {
    args = args.concat(slice.apply(arguments));
    return curry1.apply(null, args);
  };
}
let ans1 = curry1(add, 1)(2, 3)(4);
console.log(ans1);
