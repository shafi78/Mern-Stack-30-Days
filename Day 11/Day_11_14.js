// Scope 


// function scope 

function calSum(a,b){
    let sum = a+b ;
    console.log(sum);   // output : 3
}

calSum(1,2);
console.log(sum);       // Uncaught ReferenceError: sum is not defined




// global scope

let sum = 54 ;

function calSum(a,b){
    let sum = a+b ;     // output : 3
    console.log(sum);
}

calSum(1,2);
console.log(sum);       // output : 54




// block scope

for (let i=1 ; i<=5 ; i++){
    console.log(i);     // block scope
}

console.log(i);         // Uncaught ReferenceError: i is not defined


let age = 25 ;

if (age >= 18){
    let str = 'Adult';
    console.log(str);   // output : Adult
}

console.log(str)        // Uncaught ReferenceError: str is not defined




// lexical scope

function outerFunc() {
    let x = 5 ;
    let y = 6 ;

    function innerFunc(){
        let a = 10 ;
        console.log(x);     // output : 5
        console.log(y);     // output : 6
    }

    innerFunc();
    console.log(a);         // Uncaught ReferenceError: a is not defined
}

innerFunc();                // Uncaught ReferenceError: innerFunc is not defined
outerFunc();