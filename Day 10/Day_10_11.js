// for of Loop


let fruits = ['mango','apple','banana','litchi','orange'];

for (fruit of fruits){
    console.log(fruit);
}

for (char of 'Mern Stack'){
    console.log(char);
}




// Nested for of Loops

let heroes = [['ironman','spiderman','thor'],['superman','wonder woman','flash']];

for (list of heroes){
    for (hero of list){
        console.log(hero);
    }
}