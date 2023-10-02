// object oriented programming



// Object Prototype

let arr1 = [1,2,3] ;
let arr2 = [1,2,3] ;

arr1.sayHello = () => {
    console.log("Hello iam arr");
}

arr2.sayHello = () => {
    console.log("Hello iam arr");
}



// arr.__proto__ (console) :

// Array.prototype(actual object)

// String.prototype


// some console output : 

// arr1.sayHello === arr2.sayHello
// false
// "abc".toUpperCase === "xyz".toUpperCase
// true




// Factory functions

function PersonMaker (name,age) {
    const Person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi my name is ${this.name}`);
        }
    }

    return Person ;

}


// output :

// let p1 = PersonMaker("shafi",21)
// undefined
// p1
// {name: 'shafi', age: 21, talk: ƒ}age: 21name: "shafi"talk: ƒ talk()[[Prototype]]: Object
// p1.talk()
// Hi my name is shafi




// Constructor - Doesn't return anything & start with capital

// // new operator

function Person (name,age) {
    this.name = name ;
    this.age = age ;
}

Person.prototype.talk = function() {
    console.log(`Hi my name is ${this.name}`);
}

let p1 = new Person("Shafi",21);
let p2 = new Person("Sameer",25);




// Classes

class Person {
    constructor (name,age) {
        this.name = name ;
        this.age = age ;
    }

    talk() {
        console.log(`Hi my name is ${this.name}`);
    }
}

p1 = new Person("saif",21);
p2 = new Person("joyal",22);




// Inheritance 

class Person {
    constructor(name,age) {
        this.name = name ;
        this.age = age ;
    }

    talk() {
        console.log(`Hello iam ${this.name}`);
    }
}

class Student extends Person {
    constructor (name,age,marks) {
        super(name,age);
        this.marks = marks ;
    }
}

let s1 = new Student("shafi",21,96);

class Teacher extends Person {
    constructor (name,age,subject) {
        super(name,age);
        this.subject = subject ;
    }
}

let t1 = new Teacher("azhar",35,"IOT");