// Practice Question 


// Q 1) For the given start state of an array , change it to final form using methods.

// start : ['january','july','march','august'];
// final : ['july','june','march','august'];

let start = ['january','july','march','august'];
console.log(start);

start.shift();
start.shift();
console.log(start);     // ['march','august]

start.unshift('june');
start.unshift('july');
console.log(start);     
// output : ['july','june','march','august']



//  Q 2) For the given start state of an array , change it to final form using splice.

// start : ['january','july','march','august'];
// final : ['july','june','march','august'];

start = ['january','july','march','august'];
console.log(start);

console.log(start.splice(0,2,'july','june'));
console.log(start)      
// output : ['july','june','march','august']



// Q 3) Return the index of the "javascript" from the given array , if it was reversed.

let languages = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(languages);

console.log(languages.reverse().indexOf('javascript'));
// output : 4


