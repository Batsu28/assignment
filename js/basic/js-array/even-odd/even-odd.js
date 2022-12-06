let array = [4, 6, 7, 8, 43, 57, 98];
let even = 0,
  odd = 0;
let n = 0;
while (n < array.length) {
  if (array[n] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
  n++;
}

console.log("tegsh too: " + even);
console.log("sondgoi too: " + odd);
