// Compute factorial of a number
// n * recursive method(n-1)

function factorial(n) {
  if (n === 0) return 1;
  console.log(n + " * factorial(" + n + " - 1)");
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120
console.log(factorial(4)); //24
