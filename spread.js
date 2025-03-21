// arraw ba  object niye kaj kora hoy 

const max = Math.max(12, 45, 78, 98, 65);
const numbers = [12, 45, 78, 98, 65];
const arrayMax = Math.max(...numbers);
console.log(...numbers)
console.log(arrayMax);
console.log(max);


// use spread operator to copy

const nums = [12, 45, 78, 98, 65];
const nums2 = [...nums];
nums2.push(100);
console.log(nums2);


const dosto = ['faisal', 'karim', 'rahim', 'jamal'];
const newDosto = ['sakib', ...dosto];
console.log(newDosto);


// advance 
const numbers1 = [12, 45, 78, 98, 65];
const numbers2 = [23, 56, 78, 98, 65];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);