// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of the provided size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

// Solution 1
function chunk(array, size) {
  // Step 1: Initialize an empty array to store the subarrays
  const result = [];
  // Step 2: Iterate through the input array
  for (let i = 0; i < array.length; i += size) {
    // Step 3: Extract a subarray of the specified size from the input array
    result.push(array.slice(i, i + size));
  }
  // Step 4: Return the result array containing the subarrays
  return result;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
