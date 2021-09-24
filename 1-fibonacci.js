let a = 0,
  b = 1,
  i = 2;

const fibonacci = (index) => {
  if (index === 1) return 1;
  if (i === index) return a + b;
  else {
    [a, b] = [b, a + b];
    i++;
    return fibonacci(index);
  }
};

for (let i = 1; i <= 10; i++) {
  console.log(fibonacci(i));
}
