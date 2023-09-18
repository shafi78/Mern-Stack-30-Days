// Practice Questions


// Q 1) Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

let array = [7,9,0,-2];
console.log(array.slice(0,3));



// Q 2) Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

array = [7,9,0,-2];
console.log(array.slice(1,4));



// Q 3) Write a JavaScript program to check whether a string is blank or not.

let str = "shafi";

if (str === ""){
    console.log("String is blank");
}

else {
    console.log("It has some content");
}

// output : It has some content



// Q 4) Write a JavaScript program to test whether the character at the given (character) index is lower case.

str = "MernStack";
let index = 3 ;

if (str[index] == str[index].toLocaleLowerCase()){
    console.log("Character is Lowercase");
}

else {
    console.log("Character is not Lowercase");
}



// Q 5) Write a JavaScript program to strip leading and trailing spaces from a string.

str = prompt("Please enter a string : ");
console.log(`Original string : ${str}`);
console.log(`String without spaces : ${str.trim()}`);



// Q 6) Write a JavaScript program to check if an element exists in an array or not.

let arr = ['hello','a',12,24,15,30];
let item = 15 ;

if (arr.includes(item)){
    console.log("Exits");
}

else {
    console.log("Does not exits");
}