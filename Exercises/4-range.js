'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    if ((end - start) < 0) return [];
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};

// Tests from 4-range.test
// console.log(range(0, 1)); // Output: [0, 1]
// console.log(range(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
// console.log(range(0, 6)); // Output: [0, 1, 2, 3, 4, 5, 6]
// console.log(range(1, 3)); // Output: [1, 2, 3]
// console.log(range(-2, 2)); // Output: [-2, -1, 0, 1, 2]
// console.log(range(-3, -1)); // Output: [-3, -2, -1]
// console.log(range(0, 0)); // Output: [0]
// console.log(range(5, 5)); // Output: [5]
// console.log(range(-1, -1)); // Output: [-1]
// console.log(range(7, 5)); // Output: []
// console.log(range(2, -1)); // Output: []

module.exports = { range };
