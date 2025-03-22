//**
// 1. var let const
// 2. more arrow function
// 3.default parameter
// 4. spread operator
// 5. template string

// // var let const
//
// */

/**
 * 1. var let const 
 * 2. default parameter
 * 3. tampelate string
 * 4. arrow function
 * 5. spread operator
 * 6. destructuring
 * 7. object.keys, objects.values, object.entries
 * 8. object freeze, object seal
 * 9. array slice, array splice, array join
 * 10. array concat, array find, array map, array filter
 * 11. array reduce
 * 12. array includes
 * 13. array push, array pop
 * 14. array length
 * 15. array indexOf
 * 16. array isArray
 * 17. array from
 * 18. array keys
 * 19. array entries
 * 20. array some
 * 21. array every
 * 22. array fill
 * 23. array copyWithin
 * 24. array sort
 * 25. array reverse
 * 26. array toString
 * 27. array lastIndexOf
 * 28. array reduceRight
 * 29. array shift, array unshift
 * 30. for of used in array and string
 * 31. object assign
 * 32. object defineProperty
 * 33. object defineProperties
 * 34. object create
 * 35. object entries
 * 36. object freeze
 * for in loop used in object
 */
const a = 56;
const numbers = [ 56, 45, 78, 98, 65];
const person = {
    name: 'faisal',
    age: 18,
    address: 'rajshahi'
}

const massage = `Hi, I am ${person.name}. I am ${person.age} years old. I live in ${person.address}.`;

if(true){

}

const square = x => x * x;
const sum = (a,b) => a + b;

const {age, z, ...other} = { x: 2. y: 3, z: 4, a: 5, b: 6, c: 7, name: 'faisal'};

const [first, second, ...remaining] = [ 'Faisal', 'Karim', 'Rahim', 'Jama'];
