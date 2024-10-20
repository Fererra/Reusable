'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    Marcus: '+380445554433'
};

const findPhoneByName = (name) => phonebook[name];

// console.log(findPhoneByName('Marcus')); // Output: +380445554433

module.exports = { phonebook, findPhoneByName };
