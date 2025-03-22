// map => loops through each elements of the array and do the operation that
// you passed you passed in the  call back function and hold the result from each operation 
// in an array and finally returs you the array


const numbers = [12, 45, 78, 98, 65];

// khub power full simple vabe kori
function doubleIt(num){
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;



const result = numbers.map(doubleIt);
// console.log(result);

const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2);




// const double = [];
// for(const num of numbers){
//     const doubleA = num * 2;
//     double.push(doubleA);
// }

// console.log(double);


// short kore amara likhte pari 

