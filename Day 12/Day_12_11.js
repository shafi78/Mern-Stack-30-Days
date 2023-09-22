// Default Parameters


function sum(a,b=2) {
    return a+b;
}

console.log(sum(3,1));      // output : 4

console.log(sum(3));        // output : 5   here b is default value i.e 2   




function sum(a=1,b) {
    return a+b;
}


console.log(sum(2));

// output : NaN