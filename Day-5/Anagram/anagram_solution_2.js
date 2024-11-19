// Helper function to sort and clean a string alphabetically
function cleanString(str) {
  return str
    .replace(/[^a-zA-Z]/g, "") // Remove non-word characters
    .toLowerCase() // Convert to lowercase
    .split("") // Split into an array of characters
    .sort() // Sort the characters
    .join(""); // Join the characters back into a string
}

// Main function to check if two strings are anagrams
function anagrams(stringA, stringB) {
  // Clean and sort the strings
  const sortedStringA = cleanString(stringA);
  const sortedStringB = cleanString(stringB);

  // Compare the sorted strings
  return sortedStringA === sortedStringB; // If they are equal, they are anagrams
}

// Test cases
console.log(anagrams("rail safety", "fairy tales")); // true
console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // true
console.log(anagrams("Hi there", "Bye there")); // false
console.log(anagrams("Hello", "World")); // false
console.log(anagrams("Listen", "Silent")); // true
