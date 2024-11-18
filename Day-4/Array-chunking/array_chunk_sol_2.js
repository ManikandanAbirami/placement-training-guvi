// 1. Start with an empty array to store the subarrays
// 2. Iterate through the input array(original array)
// 3. Check the last chunk
// 4. If the last chunk does not exist or its length is equal to the chunk size,
// 5. Create a new chunk and add it to the result array
// 6. Push the current element into the last chunk
// 7. Return the result array containing the subarrays

function chunk(array, size) {
  let chunked = []; // [[1]];

  for (let i = 0; i < array.length; i++) {
    //[1]; --> [1,2]
    const lastChunk = chunked[chunked.length - 1]; //undefined
    console.log(lastChunk);
    if (!lastChunk || lastChunk.length === size) {
      chunked.push([array[i]]);
    } else {
      lastChunk.push(array[i]);
    }
  }

  return chunked;
}
