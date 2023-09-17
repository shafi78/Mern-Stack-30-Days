// Practice Questions


// Q 1) Create a number variable num with some value.
// Now , print "good" if the number is divisible by 10 and print "bad" if it is not. 

let num = 5 ;

if (num%10){
    console.log("good");
}

else {
    console.log("bad");
}



// Q 2) Take the users name & age as input using prompts.
// Then return back the following statement to the user as an alert 
// name is age years old. 

let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");

console.log(`${name} is ${age} years old.`);



// Q 3) Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January , February , March
// Months in Quarter 2 : April , May , June 
// Months in Quarter 3 : July , August , September 
// Months in Quarter 4 : October , November , December 

let Quarter = 1 ;

switch (Quarter) {
    case 1:
        console.log("January , February , March");
        break ;

    case 2 :
        console.log("April , May , June");
        break ;

    case 3 :
        console.log("July , August , September");
        break ;

    case 4 :
        console.log("October , November , December");
        break ;

    default :
        console.log("Invalid Quarter");
}



// Q 4) A string is golden string if starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string print if it is golden string or not.

let string = 'Adam' ;

if ((string[0] == 'a' || string[0] == 'A') && (string.length > 5)){
    console.log("golden string");
}

else {
    console.log("bad string");
}



// Q 5) Write a program to find the largest of 3 numbers 

let x = prompt("Enter first number : ");
let y = prompt("Enter second number : ");
let z = prompt("Enter third number : ");

if (x > y && x > z){
    console.log(x,"is largest among 3");
}

else if (y > x && y > z){
    console.log(y,"is largest among 3");
}

else {
    console.log(z,"is largest among 3");
}



// Q 6) Write a program to check if 2 numbers have the same last digit.
// Ex : 32 and 47582 have the same last digit i.e 2

let num1 = 45 ;
let num2 = 1235 ;

if ((num1 % 10) == (num2 % 10)){
    console.log("Both have same last digit");
}

else {
    console.log("Both have different last digit");
}