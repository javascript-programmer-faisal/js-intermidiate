// filter selectors elemet based on condition and returns a new array with the 
// elements that ful filled the condition.

const numbers = [12, 45, 78, 98, 65];
const players = [75, 45, 78, 98, 65];

// const selected = players.filter(player => player > 70 );
// const selected = players.filter(player => player > 90 );
// const selected = players.filter(player => player > 40 );
const selected = players.filter(player => player % 2 === 1 );
// console.log(selected);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman', 'tim', 'josna'];
const oddfriends = friends.filter(friend => friend.length > 4);

console.log(oddfriends);