const numbers = [12, 45, 78, 98, 65];
// for(let i = 0; i < numbers.length; i++){}


// while loop 
for(const number of numbers){
    // console.log(number);
}

const nobab = 'siraj ud doula';
for(const char of nobab){
    // console.log(char);
}

const glass = {
    color: 'white',
    price: 100,
    weight: 200,
    isClean: true
};

for(const key in glass){
    // console.log(key);
    // console.log(glass[key]);
    console.log(key, glass[key]);
}

for(const prop in glass){
    console.log(prop, glass[prop]);
}