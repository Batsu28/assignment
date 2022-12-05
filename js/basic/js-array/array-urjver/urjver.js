let arr1 = [10, 8, 6, 5, 8];
let arr2 = [8, 7, 3, 2, 9];
let output = "";
let i = 0;

while (i < arr1.length) {
  output += arr1[i] * arr2[i] + " ";
  i++;
}
console.log(output);
