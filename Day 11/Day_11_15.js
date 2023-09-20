// Practice Question


// Q 1) Predict the follwing output for the following code.

let greet = "hello";

function changeGreet() {
    let greet = 'namaste';
    console.log(greet);         // namaste

    function innerGreet() {
        console.log(greet);     // Never Called
    }
}

console.log(greet);             // hello
changeGreet();