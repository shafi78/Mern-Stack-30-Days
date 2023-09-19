// Favorite Movie Guess


let favMovie = "3 idiots";
let guess = prompt("Guess my favorite movie");

while ((guess != favMovie) && (guess != 'quit')) {
    console.log("Wrong");
    guess = prompt("Wrong Guess , Plase try again");
}

if (guess == favMovie){
    console.log("You guessed it right!",guess);
}

else {
    console.log("You quit");
}