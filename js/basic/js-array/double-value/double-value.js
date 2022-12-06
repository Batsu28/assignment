let input = [4, 2, 34, 4, 1, 12, 1, 4];
let output = "";

for (let n = 0; n < input.length; n++) {
  let i = -1;
  while (i < input.length) {
    i++;
    if (n == i) {
      continue;
    } else if (input[n] == input[i]) {
      output += input[i] + " ";
      break;
    }
  }
}

console.log(output);
