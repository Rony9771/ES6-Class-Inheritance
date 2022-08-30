const numbers = [34, 56 , 7 , 9, 2];
const result = [];

for (const number of numbers){
  const doubled = number * 2;
  result.push(doubled);
}
//console.log (result);

function double (number){
  return number*2;
}

// arrow function
const doublenew = num => num*2;

// with function

function doubled (numbers){
  const result =  [];
  for (const number of numbers){
    //const multi = number * 2;
    //const multi = double(number); //call function
    const multi = doublenew(number); //call arrow function
    result.push(multi);

  }
  return result;

}
const value =doubled(numbers)
console.log(value);

// Magic of map

const arr = [2, 4 ,8 , 16 ,32];
const doubleIt =num =>num*2;
const MakeDouble  = arr.map(doubleIt);
console.log(MakeDouble);

const fiveTimes = [1, 2, 3, 4,  5].map( x=> x*5);
console.log(fiveTimes);