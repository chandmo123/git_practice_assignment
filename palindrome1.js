let a = "madam";
let rev = "";
for (let i = a.length - 1; i >= 0; i--) {
  rev = rev + a[i];
}
if (a == rev) {
  console.log("yes");
} else {
  console.log("no");
}
