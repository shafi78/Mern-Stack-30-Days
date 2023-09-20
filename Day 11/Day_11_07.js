// Practice Questions


// Q 1) Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);



// Q 2) Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
    name: 'bugatti',
    model: 2020,
    color: 'blue',
};

console.log(car.name);



// Q 3) Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const Person = {
    name: 'shafi',
    age: 21,
    city: 'saundatti',
}

Person.city = 'New York';
console.log(Person);

Person.country = "United States";
console.log(Person);