let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let itSort = itCompanies.sort();
console.log(itSort);

let itreverse = itCompanies.reverse();
console.log(itreverse);

let itshift = itCompanies.shift();
console.log(itCompanies);

let itslice = itCompanies.splice(itCompanies.length / 2, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

let itsplice = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
