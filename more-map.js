const numbers = [12, 45, 78, 98, 65];


const doubled = numbers.map(num => num * 2);
// console.log(doubled);

const fiveBounus = numbers.map(num => num + 5);
// console.log(fiveBounus);

const halves = numbers.map(num => num / 2);
// console.log(halves);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const length = friends.map(friend => friend.length);
// console.log(length);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);