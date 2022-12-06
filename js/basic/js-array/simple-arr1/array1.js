let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(" ");

console.log(itCompanies.length);

console.log(" ");

let n = 0;
while (n < itCompanies.length) {
  console.log(itCompanies[n]);
  n++;
}

console.log(" ");

let i = 0;
while (i < itCompanies.length) {
  console.log(itCompanies[i].toUpperCase());
  i++;
}

console.log(" ");

let a = 0;
let output = "";
while (a < itCompanies.length) {
  output += itCompanies[a] + ", ";
  a++;
}
console.log(output + "зэрэг мэдээллийн технологийн томоохон компаниуд.");
