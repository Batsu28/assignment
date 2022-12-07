let register = prompt("please enter your register number");
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";

if (
  register.length == 10 &&
  (upper.includes(register.substring(0, 2)) ||
    lower.includes(register.substring(0, 2))) &&
  !isNaN(register.substring(2, 9))
) {
  alert("you are mongol");
} else {
  alert("please enter in correct formation1");
}
