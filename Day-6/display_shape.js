// Write a function that takes in a number and prints out the shape based on the number.
// For example, if the input is 3, the output should be:
// *
// **
// ***
// If the input
// is 5, the output should be:
// *
// **
// ***
// ****
// *****

function displayShape(n) {
  // Step 1 : Create an empty string to hold the shape in the for loop
  for (let row = 1; row <= n; row++) {
    let stair = "";
    // Step 2: Create a for loop to add the number of # in each row
    for (let col = 1; col <= n; col++) {
      // Step 3: Add # to the stair string if the current column
      // is less than or equal to the current row
      if (col <= row) {
        // 2 <= 2
        stair += "# ";
      } else {
        stair += "_";
      }
    }
    // Step 4: Print the stair string for the current row
    console.log(stair);
  }
}

displayShape(5);
