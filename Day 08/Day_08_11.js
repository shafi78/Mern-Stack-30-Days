// truthy & falsy values


// Falsy values

false , 0 , -0 , 0n , "" , null , undefined , NaN

if (true){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has true value 



if (false){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 



if (1){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has true value 



if (0){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 



if (null){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 



if (undefined){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 



if (NaN){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 



if (""){
    console.log("It has true value");
}

else {
    console.log("It has false value");
}

// output : It has false value 