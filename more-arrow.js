const difference = (x, y) => x - y;

const multiply = ( first, second , third , fourth) => first * second * third * fourth;
//single perameter
const getAge = (person) => person.age;
const student = {
    name: 'faisal',
    age: 18,
    address: 'rajshahi'
}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird[1, 3, 5, 7, 9, 11, 13];
console.log(third); 


const doubleIt = num => num * 2;

// no paramettre

const getPI = () => Math.PI;
console.log(getPI());


//large perameter

const doMath = (x, y) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}