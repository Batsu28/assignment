let n = 49;

if (n < 100) {
  if ((n % 2 == 0 && n > 3) || (n % 3 == 0 && n > 3) || (n % 5 == 0 && n > 5)) {
    console.log(n + " is not prime number");
  } else {
    console.log(n + " is prime number");
  }
} else {
  console.log("please enter number lower than 100");
}
