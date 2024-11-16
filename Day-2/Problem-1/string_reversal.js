//Given a string, return a new string with the reveresed order of characters
//--- Examples
//reverse('apple') === 'elppa'
//reverse('hello') === 'olleh'
//reverse('Greetings!') === '!sgniteerG'

function reverseString(str) {
  // Step 1: Convert string to array
  const strArray = str.split("");

  // Step 2: Reverse the array
  const reversedArray = strArray.reverse();

  // Step 3: Join the array back into a string
  const reversedString = reversedArray.join("");

  // Step 4: Return the reversed string
  return reversedString;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Greetings!")); // Output: "!sgniteerG"
console.log(reverseString("apple")); // Output: "elppa"
