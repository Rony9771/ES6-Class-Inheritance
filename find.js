const numbers = [12, 34, 75, 65 ,78, 99];

const fives = numbers.find(x => x%5 == 0);
const five =numbers.filter(y => y%5 ==0);
console.log(fives);
console.log(five);