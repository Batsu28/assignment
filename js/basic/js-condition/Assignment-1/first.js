// 1

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; // true
let iv = 4 <= 3; // false
let v = 4 == 4; // true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

// 2

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true

// 3

let myage = 23,
  yourage = prompt("Насаа оруулна уу:");

if (myage < yourage) {
  alert("you are older");
} else if (myage == yourage) {
  alert("we are same age");
} else {
  alert("i am older");
}

// 4

let day = 10;

if (day >= 1 && day <= 5) {
  console.log("Ажлын өдөр");
} else if (day == 6 || day == 7) {
  console.log("Амралтын өдөр");
} else {
  console.log("day you enter is not found");
}

// 5

let workTime = prompt("enter your work time"),
  ratePerHour = 28,
  yourSalary = workTime * ratePerHour;

alert("Your Salary is: " + yourSalary + "$");
