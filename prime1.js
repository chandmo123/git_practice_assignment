let n = 6;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(n, "is prime");
} else {
  console.log(n, "not prime");
}
