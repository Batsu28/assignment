let n = 7;

if (n < 100) {
  if ((n % 2 == 0 && n > 3) || (n % 3 == 0 && n > 3) || (n % 5 == 0 && n > 5)) {
    console.log("bish");
  } else {
    console.log("mun");
  }
} else {
  console.log("wrong number");
}
