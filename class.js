const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 10000 }
]


// has some properties, method 

class Product { 
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
console.log(lenovo);

lenovo.speak('oba kita kou')