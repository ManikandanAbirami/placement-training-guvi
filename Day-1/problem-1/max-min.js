function findMinAndMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}

const nums = [3, 6, 89, 201, 2, 67, 32, 1000];
console.log(findMinAndMax(nums));
