// Array Methods 


let cars = ['audi','bmw','maruti','toyota'];
console.log(cars);



// push

cars.push("bugatti");
console.log(cars);



// pop

cars.pop();
console.log(cars);



// un-shift 

cars.unshift('bugatti');
console.log(cars);



// shift

cars.shift();
console.log(cars);



let followers = ['a','b','c'];
let blocked = followers.shift();

console.log(followers);
console.log(blocked);



// indexOf

let primary = ['red','yellow','blue'];
console.log(primary.indexOf('yellow'));     // 1
console.log(primary.indexOf('Yellow'));     // -1



// includes

console.log(primary.includes('red'));       // true
console.log(primary.includes('blue'));      // true 
console.log(primary.includes('orange'));    // false



// concat

let array1 = ['red','yellow','blue'];
let array2 = ['orange','green','violet'];
console.log(array1.concat(array2));



// reverse

console.log(array1.reverse());



// slice

let colors = ['red','yellow','blue','orange','pink','white'];

console.log(colors.slice());
// output : ['red','yellow','blue','orange','pink','white'];

console.log(colors.slice(2));
// output : ['blue','orange','pink','white'];

console.log(colors.slice(2,3));     
// output : ['blue']

console.log(colors.slice(-1));
// output : ['white']

console.log(colors.slice(-5));
// output : ['yellow', 'blue', 'orange', 'pink', 'white']



// splice

console.log(colors);
// ['red','yellow','blue','orange','pink','white']

console.log(colors.splice(4));
// ['pink','white']

console.log(colors)
// ['red','yellow','blue','orange']

console.log(colors.splice(0,2));
// ['red','yellow']

console.log(colors);
// ['blue','orange']

console.log(colors.splice(1,0,'greenyellow','azure'));
// []

console.log(colors);
// ['blue', 'greenyellow', 'azure', 'orange']



// sort

let words = ['cat','dog','elephant','ball','apple'];
console.log(words);

console.log(words.sort());


let num = [33,55,22,11,44];
console.log(num.sort());