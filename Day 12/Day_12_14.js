// Destructuring

let names = ['shafi','sameer','yusuf','saif','joyal'];
let [winner,runnerup] = names ;

console.log(winner,runnerup);

// output : shafi   sameer




names = ['shafi','sameer','yusuf','saif','joyal'];
[winner,runnerup,...others] = names ;

console.log(winner,runnerup,others);

// output : shafi   sameer  yusuf   saif    joyal





// Destructuring Objects

const student = {
    name: 'shafi',
    age: 21,
    class: 15,
    subjects: ['c++','java','javascript','react'],
    username: 'shafi@786',
    password: 'abcd'
}

let {username,password} = student ;

console.log(username,password);

// output : shafi@786   abcd



let {username:user,password:secret} = student ;

console.log(user,secret);

// output : shafi@786   abcd



let {name,city: place ='Mumbai'} = student ;

console.log(name,place);

// output : shafi   Mumbai