let a = 10;
let b = 5;
let c = 8;
let sum = a + b + c;

console.log("Гурвалжингийн периметр " + sum);

let r = 10;
const pi = 3.14;

console.log("Тойргийн талбай: " + r * r * pi);

let x, y;
x = 2;
y = 5;
let m = (y * 2 - y) / (x * 2 - x);

console.log("хариу" + m);

let gbToBit, gbToByte, gbToKb, gbToMg;

gbToBit = 1024 * 1024 * 1024 * 8;
gbToByte = 1024 * 1024 * 1024;
gbToKb = 1024 * 1024;
gbToMg = 1024;

console.log("15gb is: " + gbToBit * 15 + " bit");

let mb, time, mySpeed, bitSec;
mb = 15;
time = 3;
mySpeed = mb / time;
bitSec = mySpeed * 1000 * 1000;

console.log("my internet speed in bit/s is: " + bitSec + " Bit Rate");

let side1, side2, side3, sum2, s;
side1 = 10;
side2 = 8;
side3 = 2;
sum2 = side1 + side2 + side3;
s2 = sum2 * (sum2 - side1) * (sum2 - side2) * (sum2 - side3);
s = Math.sqrt(s2);

console.log("гурвалжны талбай: " + s);

let Cels1, fah1;
Cels1 = -10;
fah1 = Cels1 * 1.8 + 32;

console.log(fah1 + "°F");

let fah3, Cels2;
fah2 = 14;
Cels2 = (fah2 - 32) / 1.8;

console.log(Cels2 + "°C");

let num1 = 10,
  num2 = 15;
console.log("Addition of given 2 numbers is " + (num1 + num2));
console.log("Subtraction of given 2 numbers is " + (num1 - num2));
