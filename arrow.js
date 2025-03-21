// fuction declaration

function add (a,b){
    return (a+b);
}

// function expression 

const add2 = function(a,b){
    return a + b;
}
console.log(add2);

const sum = add(5,7);
console.log(sum);

// arrow function 

const add3 = (a,b)=> a+b;
console.log(add3(5,7));

const multipy = ( num1, num2) => num1 * num2;
const mult = multipy(5,7);
console.log(mult);