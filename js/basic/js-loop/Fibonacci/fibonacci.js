let input = 88;
let a = 1,
  b = 1,
  c = a + b;

while (c < input) {
  a = b;
  b = c;
  c = a + b;
}
console.log(c - a);
