const compose =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

const arr = [1, 2, 3];

const map = (arr) => arr.map((el) => el * 2);
const filter = (arr) => arr.filter((el) => el > 2);
const sort = (arr) => arr.sort((a, b) => b - a);

console.log(compose(map, filter, sort)(arr));
