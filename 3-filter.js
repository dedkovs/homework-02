const filter = (array, fn) =>
  array.reduce((arr, el) => (fn(el) ? [...arr, el] : [...arr]), []);

const arr = [1, 2, 3];

const fn = (x) => x > 1;

console.log(filter(arr, fn));
