'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' }
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name) return obj.phone;
    }
};

// console.log(findPhoneByName('Marcus Aurelius')); // Output: +380445554433

module.exports = { phonebook, findPhoneByName };
