const names =['Rony', 'Nabil', 'Pranto'];
const firstLtr =names.map( x => x[0]);
console.log(firstLtr);

const findlength = names.map(z=>z.length);
console.log(findlength);


const products = [
  {id: 1, name : 'walton', price : 10000},
  {id: 1, name : 'Samsu', price : 15000},
  {id: 1, name : 'Nokia', price : 20000}
]

const items =products.map(r=>r.name);
console.log(items);