'use strict';
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// looping Arrays]: The for-of-loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// destructuring arrays
for (const [i,el] of menu.entries()){
  console.log(i,el);
}

// destructuring objects

// const {name, openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

// const {name: restaurantName, openingHours: hours,categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);

// // default values
// const { menu = [], starterMenu: starters = {}} = restaurant;
// console.log(menu,starters);

// // mutating variables  or changing
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 34, c: 4};
//  ({a,b} = obj);
// console.log(a,b);

// // Nesting  objects
// const {
// fri: {open: o, close: c},
// } = openingHours;
// console.log(o,c);

// const arr = [1,2,3];
// const newArr = [5,6,arr[0],arr[1],arr[2]];
// console.log(newArr);

// // Spread Operator
// const goodArr = [5,6,...arr];
// console.log(goodArr);
// console.log(...goodArr);

// const newMenu = [...restaurant.mainMenu, "Beef"];
// console.log(newMenu);

// // Copying Arrays
// const mainMenuCopy = [...restaurant.mainMenu];

// // Joining Arrays
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// /* what are iterables ?
// iterables: arrays, strings, maps, sets but NOT objects
// */

// const str = "Jonas";
// const letters = [...str, ' ', 'm.']
// console.log(letters);
// console.log(...str);

// // spread operator on objects
// const newRestaurant = {
//   ...restaurant, founder: "Jonas", founded: 1999
// }
// console.log(newRestaurant);

// // copying objects
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Spread operator is on the right side of = sign
// const arr = [1,2,...3,4,5];

/*#1 destructuring */

// Rest operator is on the left side of =
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [Pizza, , Risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(Pizza,Risotto,otherFood);

// // Rest operator in Objects
// const {sat,...weekdays} = restaurant.openingHours;
// console.log(sat,weekdays);

// /*#2 in functions */
// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// add(2,4);
// add(2,3,4,5);

// const x = [23,8];
// add(...x);




/*
destructuring arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(arr);
console.log(x,y,z);

// let [first, second ] = restaurant.categories;
// console.log(first, second);

 let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary ] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from the function
const [starterMenu, mainCourse] = restaurant.order(2,0);
console.log(starterMenu,mainCourse);

// destructuring an array

const nested = [2,4 [5,6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j,k);

// default values
const [p=1, q=1,r=1] = [9.8];
console.log(p,q,r);// q and r become 1!!

*/
// short circuiting (&& and ||)

// || / ---OR--- Operator

// || / ---OR--- operator returns the first truthy value or the last falsy value if they are all false values:
// console.log('----OR----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // && /--- AND--- Operator
// // && / AND operator returns the first falsy value and the last truthy value if both the last values are truthy:
// console.log('---AND---');gi
// console.log(7 && 'Hello');
// console.log(0 && 'Jonas');
// console.log(
//   'hello' && 0 && null && 'Jonas'
// );
 


restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT⛔ 0 , '')

const guests = restaurant.numGuests ?? 10;
console.log(guests);

// OR assignment operator

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest1.numGuests ||= 10;

// AND assignment operator
// rest1.numGuests = rest1.numGuests && '<ANONYMOUS>';
// rest2.numGuests = rest2.numGuests &&  '<ANONYMOUS>';

// rest1.numGuests &&= '<ANONYMOUS>';
// rest1.numGuests &&= '<ANONYMOUS>';

// Nullish assignment operator

rest1.numGuests ??= 10;
rest1.numGuests ??= 10;

console.log(rest1);
console.log(rest2);




