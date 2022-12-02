let num = 10;
let count = 0,
  output = "";

while (count < num) {
  count++;
  output = output + count + " ";
}
console.log(output);

while (count < num) {
  if (count % 2 == 0) {
    output = output + count + " ";
  }
  console.log(output);
}
