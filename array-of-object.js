const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 10000 }
]

//map
const names = products.map(product => product.name);
//console.log(names);
{/* <br></br> */}
const prices = products.map(product => product.price);
console.log(prices, names);
//map

//forEach
products.forEach(p => console.log(p.id));

//filter

const expensive = products.filter(p => p.price > 5000)
console.log(expensive);

// find 

const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce

const total = products.reduce((Acc , cur) => Acc + cur.price , 0);
console.log(total);