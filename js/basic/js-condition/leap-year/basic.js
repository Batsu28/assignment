let year = prompt("enter the year");
let yearNum = Number(year);

if (Number.isInteger(yearNum)) {
  alert("It's not number");
} else if (yearNum % 4 == 0) {
  alert("It's leap year");
} else {
  alert("It's not leap year");
}
