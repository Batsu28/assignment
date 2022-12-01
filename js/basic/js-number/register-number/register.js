let register = prompt("please enter your register number");
let register1 = register.toLowerCase();

if (register1.length == 10) {
  if (register1.substring(0, 2).match([a - z])) {
    if (register1.substring(2, 9) === isNaN) {
      alert("you are mongol");
    } else {
      alert("you are not mongol");
    }
  } else {
    alert("please enter in correct formation2");
  }
} else {
  alert("please enter in correct formation1");
}
