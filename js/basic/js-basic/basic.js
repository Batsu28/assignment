// 10

let a = 10;
let b = 5;
let c = 8;
let sum = a + b + c;

console.log("Гурвалжингийн периметр " + sum);

// 11

let r = 10;
const pi = 3.14;

console.log("Тойргийн талбай: " + r * r * pi);

// 12

let x, y;
x = 2;
y = 5;
let m = (y * 2 - y) / (x * 2 - x);

console.log("хариу" + m);

// 13

let gbToBit, gbToByte, gbToKb, gbToMg;

gbToBit = 1024 * 1024 * 1024 * 8;
gbToByte = 1024 * 1024 * 1024;
gbToKb = 1024 * 1024;
gbToMg = 1024;

console.log("15gb is: " + gbToBit * 15 + " bit");

// 14

let mb, time, mySpeed, bitSec;
mb = 15;
time = 3;
mySpeed = mb / time;
bitSec = mySpeed * 1000 * 1000;

console.log("my internet speed in bit/s is: " + bitSec + " Bit Rate");

// 15

let side1, side2, side3, sum2, s;
side1 = 10;
side2 = 8;
side3 = 2;
sum2 = side1 + side2 + side3;
s2 = sum2 * (sum2 - side1) * (sum2 - side2) * (sum2 - side3);
s = Math.sqrt(s2);

console.log("гурвалжны талбай: " + s);

// 16

let Cels1, fah1;
Cels1 = -10;
fah1 = Cels1 * 1.8 + 32;

console.log(fah1 + "°F");

// 17

let fah3, Cels2;
fah2 = 14;
Cels2 = (fah2 - 32) / 1.8;

console.log(Cels2 + "°C");

// 18

let num1 = 10,
  num2 = 15;
console.log("Addition of given 2 numbers is " + (num1 + num2));
console.log("Subtraction of given 2 numbers is " + (num1 - num2));

// 19

let cm1, inch1;
inch1 = 10;
cm1 = inch1 * 2.54;

console.log(inch1 + "inch is: " + cm1 + "cm");

let cm2, inch2;
cm2 = 10;
inch2 = cm2 / 2.54;

console.log(cm2 + "cm is: " + inch2 + "inch");

// 20

// 21

let number1, number2, number3;
number1 = 593;
number2 = (number1 - (number1 % 10)) / 10;
number3 = (number2 - (number2 % 10)) / 10;

console.log("first digit of your number is: " + number3);

// 22

let part1, part2, part3, part4, part5, part6, part7, part8, part9, part10;
part1 = "doo-doo";
part2 = "Baby Shark";
part3 = "Mommy Shark";
part4 = "Daddy Shark";
part5 = "Grandma Shark";
part6 = "Grandpa Shark";
part7 = "Let's go hunt";
part8 = "Run away";
part9 = "Safe at last";
part10 = "It's the end";
