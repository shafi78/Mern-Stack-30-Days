// Practice Question


// Q 1) A "good string" is a string with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.

let string = "apple"

if (string[0] === 'a' && string.length > 3){
    console.log("Good string");
}

else {
    console.log("Bad string");
}



// Q 2) Predict the output of following code :

let num = 12 ;

if ((num%3 === 0) && (num+1 == 15) || (num-1 == 11)){
    console.log("safe");
}

else {
    console.log("unsafe");
}