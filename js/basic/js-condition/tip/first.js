let pay = 3000;
let tip = pay >= 5000 && pay <= 30000 ? pay * 0.15 : pay * 0.2;

console.log("your tip amound is:" + tip);
console.log("your total amound is: " + (pay + tip));
