'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    if (end - start < 0) return [];
    const array = [];
    for (let n = start; n <= end; n++) {
      if (n % 2 !== 0) array.push(n);
    }
    return array;
};

// Tests from 5-range-odd.test
// console.log(rangeOdd(0, 1)); // Output: [1]
// console.log(rangeOdd(0, 5)); // Output: [1, 3, 5]
// console.log(rangeOdd(0, 6)); // Output: [1, 3, 5]
// console.log(rangeOdd(1, 3)); // Output: [1, 3]
// console.log(rangeOdd(-2, 2)); // Output: [-1, 1]
// console.log(rangeOdd(-3, -1)); // Output: [-3, -1]
// console.log(rangeOdd(0, 0)); // Output: []
// console.log(rangeOdd(5, 5)); // Output: [5]
// console.log(rangeOdd(-1, -1)); // Output: [-1]
// console.log(rangeOdd(7, 5)); // Output: []
// console.log(rangeOdd(2, -1)); // Output: []

module.exports = { rangeOdd };
