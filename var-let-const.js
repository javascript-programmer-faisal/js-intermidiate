// no reason to use var
// let const
// amar ekhon theke sob somoi let const use korbo

// let : allow it to reassign cause eitar man poriborton kora jay
// const : do not allow it to reassign cause eitar man poriborton kora jai nah

let money = 25;
money = 50;
console.log(money);

const Money = 35;
const rich = money + Money;
console.log(rich);


let count = 2;
count++;
console.log(count);

/// 

const numbers = [12, 45];
numbers[0] = 88;
numbers.push(12);
console.log(numbers);


// obkects

let student = {
    name : 'Rahim',
    age : 25,
    phone : 017,
    address : 'Dhaka'
}

student = {
    name : 'Karim',
    age : 25,
    phone : 017,
    address : 'Dhaka'
}

console.log(student);

//loop 

let sum = 0;

for (let i =0; i <10; i++){
    sum = sum + i;
}

console.log(sum); // error cause i is not defined