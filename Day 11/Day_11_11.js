// Practice Question


// Q 1) Create a function that gives us the average of 3 numbers.

function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(1,2,3);         // 2
avg(90,85,82);      // 85.66



// Q 2) Create a function that prints the multiplication table of a number.

function table(num){
    for (let i=1 ; i<=10 ; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

table(5);