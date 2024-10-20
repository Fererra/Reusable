'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const obj1 = { name: 'testName' };
    let obj2 = { name: 'testName' };

    // console.log(obj1, obj2);
    
    obj1.name = 'Mykyta';
    obj2.name = 'Mykyta';

    // console.log(obj1, obj2);
    
    /* The result of obj1 will be the same as obj2
    The keyword "const" indicates that the variable cannot be reassigned, 
    but the properties of the object can be changed, 
    and "let" allows us to both reassign a change and its properties 
    */

    // Assigning a new object
    obj2 = { name: 'testName Mykyta' };

    // console.log(obj1, obj2);
};

// fn()

module.exports = { fn };
