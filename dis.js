const actor = {
    name: 'John',
    age: 35,
    address: 'USA',
    phone: '017627432543'
}

// if roght side is an object left side of distructuring should will be an object
// use property name as variable name
// const { name, phone } = actor;

const { name, phone, address, age } = actor;
console.log(name, phone, address, age);



// const phone = actor.phone;
// console.log(phone);

// array destructuring
const numbers = [45, 98, 65, 78];
const [first, second] = numbers;
const [x, y] = numbers;
// console.log(first, second);
// console.log(x, y);
// console.log(first, second);

function doubleThem(a, b){
    return [a*2, b*2];
}

const [doubleA, doubleB] = doubleThem(12, 45);
console.log(doubleA, doubleB);