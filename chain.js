// kivabe data access korbo
// like akjon maake bollo je oi akjoner data amake ene deo

const data = [{
    name: 'Rahim',
    age: 25,
    phone: '017',
    address: 'Dhaka'
}, {
    name: 'Karim',
    age: 25,
    phone: '017',
    address: 'Dhaka'
}]

// console.log(data[0].address);

const products = {
    count: 5000,
    data:[
        {id: 1, name: 'laptop', price: 50000},
        {id: 2, name: 'mobile', price: 15000},
        {id: 3, name: 'watch', price: 5000},
        {id: 4, name: 'tablet', price: 10000}
    ]
}

// second products price
// console.log(products.data[1].price);


const user = {
    id: 5000,
    name: 'faisal',
    address:{
        street: {
            first: 'cantonment road',
            second: 'probager goli',
            third: 'iqbaaler house'
        },
        city: 'rajshahi',
    }
}
const user2 ={
    id: 5002,
    name: 'poribibir mazar',
    address: {
        city: 'rajshahi',
        country: 'Bangladesh'
    }
}

// console.log(user.address.street?.second);
// console.log(user2.address.street?.second);


const user3 ={
    id: 5005,
    name : 'Faisal Ahmed',
    address:{
        city: 'Bogura',
        country: 'bangladesh',
        PresentAddress:{
            distric: 'shibgonj',
            thana: 'shibgonj',
            postcode: 5850,
            road: 'namuja Bazar pirob',
            house: 'faisal villa'
        }
    }
}

console.log(user3.address.PresentAddress.road);