// function declaration // functio jevabe declaration kora lage ami niche tai likhe
// practice korbo ..

/**  note: function declare korar por jodi amra output dekhte chai .. tahole
 * amader funtion declare korar por niche console log na kore amader
 * abar const er moddhe function er name declare kore seikhane add(5,7) eivabe 
 *number add kora lagbe . tobei amra output pabo.
*/

function faisal(a, b){
    return (a + b);
}

const sum = faisal(5,7);
console.log(sum)

// function expression

function add(a,b){
    return (a+b);
}
const math = add(10, 6)

console.log(math);

// function expression declaration

const add2 = function(a,b){
    return a + b;
}
console.log(add2);

// arrow function

const add3 = (a, b) => a + b;
console.log(add3(10, 7));

const add4 = (x, y) => x * y;
console.log(add4('60', '10'));

const multipy = (num1, num2) => num1 * num2;
const mult = multipy(10, 30);
console.log(mult);