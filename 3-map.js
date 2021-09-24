const map = (array, fn) => array.reduce((arr, el) => [...arr, fn(el)], []);

const arr = [1, 2, 3];

const fn = (x) => x * 2;

console.log(map(arr, fn));
