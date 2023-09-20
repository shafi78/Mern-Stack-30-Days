// Practice Question


// Q 1) Create a function that returns the sum of numbers from 1 to n.

function sum(n) {
    let sum = 0;

    for (let i=1 ; i<=n ; i++){
        sum += i ;
    }

    return sum ;
}

console.log(sum(5));        // output : 15



// Q 2) Create a function that returns the concatenation of all strings in an array.

let str = ['hi','hello','bye','!'];

function concat() {
    let result = "" ;

    for (let i=0 ; i<str.length ; i++){
        result += str[i];
    }

    return result ;
}

console.log(concat());