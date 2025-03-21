const glass = {name: 'water glass', price: 100, color: 'white', madeIn: 'Bangladesh', isClean: true};
const {price, color, madeIn, isClean} = glass;
console.log(glass);


const keys = Object.keys(glass);
//[ 'name', 'price', 'color', 'madeIn', 'isClean' ]
console.log(keys);


const values = Object.values(glass);
console.log(values);

// array of array , two dimensional array
const pairs = Object.entries(glass);
console.log(pairs);


// delete glass.isClean;
// console.log(glass);


// distructuring 
const {isClean: isCleanStatus, ...rest} = glass;
console.log(rest);

//freeze
Object.freeze(glass);
glass.janina = 200;
console.log(glass);

// seal
Object.seal(glass);
glass.janina = 200;
console.log(glass);