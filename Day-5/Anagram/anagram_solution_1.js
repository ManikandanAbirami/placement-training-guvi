// Check to seee if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(str) {
  // Create an empty object to store the character counts
  let charMap = {};

  // Cleaup up the string by removing spaces, non-alphabet character
  // and converting to lowercase
  let cleanedString = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  //Loop through each character in the cleaned string and populate the charMap
  for (let char of cleanedString) {
    charMap[char] = (charMap[char] || 0) + 1; // Increment the count for the character
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  //Step 1: Build character maps for both strings
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  //Step 2: Compare the lengths of the character maps(number of unique characters)
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false; // If the lengths are different, they can't be anagrams
  }

  // Step 3: Compare the character counts for each character in the maps
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false; // If the counts don't match, they're not anagrams
    }
  }

  // Step 4: If all the checks pass, they're anagrams
  return true;
}

// Test cases
console.log(anagrams("rail safety", "fairy tales")); // true
console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // true
console.log(anagrams("Hi there", "Bye there")); // false
console.log(anagrams("Hello", "World")); // false
console.log(anagrams("Listen", "Silent")); // true
