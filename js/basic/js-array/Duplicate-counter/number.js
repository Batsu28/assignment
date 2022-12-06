let input = 835204;
let arr1 = Array.from(String(input), Number);
let n = 0;
let c0 = 0,
  c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 = 0,
  c7 = 0,
  c8 = 0,
  c9 = 0;

while (n < arr1.length) {
  if (arr1[n] === 0) {
    c0++;
  } else if (arr1[n] === 1) {
    c1++;
  } else if (arr1[n] === 2) {
    c2++;
  } else if (arr1[n] === 3) {
    c3++;
  } else if (arr1[n] === 4) {
    c4++;
  } else if (arr1[n] === 5) {
    c5++;
  } else if (arr1[n] === 6) {
    c6++;
  } else if (arr1[n] === 7) {
    c7++;
  } else if (arr1[n] === 8) {
    c8++;
  } else if (arr1[n] === 9) {
    c9++;
  }
  n++;
}

console.log("0: " + c0);
console.log("1: " + c1);
console.log("2: " + c2);
console.log("3: " + c3);
console.log("4: " + c4);
console.log("5: " + c5);
console.log("6: " + c6);
console.log("7: " + c7);
console.log("8: " + c8);
console.log("9: " + c9);
