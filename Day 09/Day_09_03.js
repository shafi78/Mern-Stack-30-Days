// Array (Data Structure)


let students = ['shafi','sameer','yusuf'];
console.log(students);



// Visualizing Array 

console.log(students[0]);       // shafi
console.log(students[3]);       // undefined



// Creating Arrays

let marks = [99,87,67,98,62];
console.log(marks);

let names = ['shafi','sameer','yusuf'];
console.log(names);

let info = ['shafi',39,8.5];        // mixed array 
console.log(info);

console.log(info[0]);       // shafi
console.log(info[0][0]);    // s 

// Empty Array

let emptyArray = [];
console.log(emptyArray);



// Arrays are Mutable 

let fruit = ['apple','banana','pearl'];
console.log(fruit);

fruit[2] = 'orange';
console.log(fruit);

fruit[10] = 'pineapple' ;
console.log(fruit.length);      // 11

console.log(fruit[5]);          // undefined