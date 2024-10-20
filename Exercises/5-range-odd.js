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
// console.log(range(0, 1)); // Output: [1]
// console.log(range(0, 5)); // Output: [1, 3, 5]
// console.log(range(0, 6)); // Output: [1, 3, 5]
// console.log(range(1, 3)); // Output: [1, 3]
// console.log(range(-2, 2)); // Output: [-1, 1]
// console.log(range(-3, -1)); // Output: [-3, -1]
// console.log(range(0, 0)); // Output: []
// console.log(range(5, 5)); // Output: [5]
// console.log(range(-1, -1)); // Output: [-1]
// console.log(range(7, 5)); // Output: []
// console.log(range(2, -1)); // Output: []

module.exports = { rangeOdd };
