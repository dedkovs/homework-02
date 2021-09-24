const some = (array, fn) =>
  array.reduce((sum, el) => (fn(el) ? sum + 1 : sum), 0) > 0 ? true : false;

const arr = [1, 2, 3];

const fn1 = (x) => x > 1;
const fn2 = (x) => x < 0;

console.log(some(arr, fn1));
console.log(some(arr, fn2));
