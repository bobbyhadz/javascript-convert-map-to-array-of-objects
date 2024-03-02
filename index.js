// EXAMPLE 1 - Convert a Map to an Array of Objects in JavaScript

const map = new Map();

map.set('name', 'Bob');
map.set('country', 'Chile');

const arr = Array.from(map, ([key, value]) => {
  return {[key]: value};
});

// 👇️ [{name: 'Bob'}, {country: 'Chile'}]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert a Map to an Array of Objects using Array.map()

// const map = new Map();

// map.set('name', 'Bob');
// map.set('country', 'Chile');

// // 👇️ [['name', 'Bob'], ['country', 'Chile']]
// const arr = Array.from(map);
// console.log(arr);

// // 👇️ [{name: 'Bob', country: 'Chile'}]
// const arrOfObj = arr.map(([key, value]) => {
//   return {[key]: value};
// });
// console.log(arrOfObj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Map to an Array of Objects using Map.forEach()

// const map = new Map();

// map.set('name', 'Bob');
// map.set('country', 'Chile');

// const arr = [];

// map.forEach((value, key) => {
//   arr.push({key, value});
// });

// // 👇️ [ { key: 'name', value: 'Bob' }, { key: 'country', value: 'Chile' } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a Map to an Array of Objects using for...of

// const map = new Map();

// map.set('name', 'Bob');
// map.set('country', 'Chile');

// const arr = [];

// for (const [key, value] of map) {
//   arr.push({key, value});
// }

// // 👇️ [ { key: 'name', value: 'Bob' }, { key: 'country', value: 'Chile' } ]
// console.log(arr);
