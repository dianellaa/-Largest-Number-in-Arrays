function largestOfFour(arr) {
    var largestNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      var largest = arr[i][0]; // Initialize the largest number with the first element of the sub-array
      for (var j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j]; // Update the largest number if a larger one is found
        }
      }
      largestNumbers.push(largest); // Store the largest number of the current sub-array
    }
    return largestNumbers;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  // Output: [5, 27, 39, 1001]
  