// Practice Questions


// Q 1) Write an arrow function that return the square of a number 'n'.

const squre = (num) => {
    return num*num ;
}

console.log(squre(5));      // 25




//  Q 2) Write a function that prints 'Hello World' 5 times at interval of 2s each.

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);




// Q 3) Write an arrow function named arrayAverage that accepts an an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;

    for (let number of arr){
        total += number ;
    }

    return total/arr.length ;
}

let arr = [1,2,3,4,5];
console.log(arrayAverage(arr));     // 3




// Q 4) Write an arrow function named isEven() that takes a  single number as argument and returs if it is even or not.

let num = 4 ;

const isEven = (num) => {
    if (num % 2 == 0){
        console.log("Even number")
    }

    else {
        console.log("Odd number");
    }
}
isEven(4);          // Even number




// Q 3) What is the output of the following code.

const  object = {
    message: 'Hello, World!',

    logoMessage() {
        console.log(this.message);  // undefined
    }
};

setTimeout(object.logoMessage,1000);