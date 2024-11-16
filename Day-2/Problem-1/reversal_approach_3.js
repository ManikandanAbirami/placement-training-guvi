function reverseString(str) {
  // Step 1: Convert string to array
  const strArray = str.split("");
  // Step 2: Use reduce() method to build the Reversed String and return
  return strArray.reduce((reversed, character) => character + reversed, "");
  // syntax: array.reduce((sccumlator, currentValue) => { /* logic */}, initialValue);
  // reversed(accumlator): The reversed string built so far
  // character(currentValue): The current character(element) being processed
  // initialValue: An empty string '' to start the reversed string
}

console.log(reverseString("Manikandan"));
