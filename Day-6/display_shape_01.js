function steps(n, row = 0, stair = "") {
  // Base case: if the row is equal to n, we have completed the steps
  if (row === n) return;

  // If the stair string has a length equal to the row number,
  // we have completed this row, so we move on to the next row
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  // If the stair string is shorter than the row number, we add a "#"
  // otherwise, we add a space

  if (stair.length < row + 1) {
    stair += "#";
  } else {
    stair += " ";
  }
  // Recursively call the steps function with the updated row and stair strings
  steps(n, row, stair);
}

steps(5);
