// Practice Questions


// Q 1) Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1,2,3,4,5,];

const square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc,cur) => acc+cur,0);
let avg = sum/nums.length;
console.log(avg);

// output : [1, 4, 9, 16, 25]
            
//          11




// Q 2) Create a new array using the map function whose each element is equal to the original element plus 5.

let numbers = [2,4,6,7,-2,-4];

console.log(numbers.map((number) => number+5));

// output : [7, 9, 11, 12, 3, 1




// Q 3) Create a new array whose elements are in uppercase of words present in the original array.

let strings = ['shafi','sameer','yusuf'];

console.log(strings.map((string) => string.toUpperCase()));

// output : ['SHAFI', 'SAMEER', 'YUSUF']




// Q 4) Write a function called doubleAnReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((v)=> v*2),
];

doubleAndReturnArgs([1,2,3],4,4);   // [1,2,3,8,8]

doubleAndReturnArgs([2],[10],4);    // [2,20,8]




// Q 5) Write a function called mergeObjects that accepts and return a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

mergeObjects({a:1,b:2},{c:3,d:4});  // {a:1 , b:2 , c:3 , d:4}