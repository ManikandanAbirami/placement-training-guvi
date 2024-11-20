// Print numbers from 1 to N recursively.

function printNumbers(n) {
  // Base case: If n is 0, stop recursion
  if (n === 0) {
    return;
  }

  // Print the current number
  console.log(n);

  // Recursive step: First print numbers from 1 to n-1
  printNumbers(n - 1);
}

printNumbers(3);
