let input = "ab1f1ba";
let array = input.split("");

if (array.join() == array.reverse().join()) {
  console.log("It's palindromic");
} else {
  console.log("It's not palindromic");
}
