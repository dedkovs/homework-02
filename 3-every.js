const every = (array, fn) =>
  array.reduce((sum, el) => (fn(el) ? sum : sum + 1), 0) > 0 ? false : true;

const arr = [1, 2, 3];

const fn1 = (x) => x > 1;
const fn2 = (x) => x > 0;

console.log(every(arr, fn1));
console.log(every(arr, fn2));
