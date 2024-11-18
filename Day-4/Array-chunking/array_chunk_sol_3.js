function chunk(array, size) {
  //step 1: Array to hold the chunks
  let chunked = [];
  //Step 2: Start index for slicing
  let index = 0;

  // Continue until the index is less than the array length
  while (index < array.length) {
    // Slice the array from the index to index + size, and push it to chunked
    chunked.push(array.slice(index, index + size));

    // Move the index forward by the chunk size
    index += size;
  }

  // Return the chunked array
  return chunked;
}
