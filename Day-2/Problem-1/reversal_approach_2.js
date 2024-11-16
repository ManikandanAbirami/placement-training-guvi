function reverseString(str) {
  // string to array - "For...of"
  // Step 1: Initialize an empty string to build the reversed string
  let reversed = "";

  // Step 2: Iterate through the characters of the input string in reverse order
  for (let character of str) {
    // Step 3: Append each character to the reversed string
    reversed = character + reversed;
  }
  // Step 4: Return the reversed string
  return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Greetings!")); // Output: "!sgniteerG"
console.log(reverseString("apple")); // Output: "elppa"
