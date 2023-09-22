// Spread Operator


let arr = [1,2,3,4,5,6,7,8];


// without spread operator 

console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]));


// To reduce code complexity we use spread operator

console.log(Math.min(...arr));  // output : 1




// Spread with Array Literals

let array = [1,2,3,4,5];

let newArray = [...array];

console.log(newArray);



let chars = [...'shafi'];

console.log(chars);             // output : ['s','h','a','f','i']



let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let num = [...odd,...even];

console.log(num);               // output : [1,3,5,7,9,2,4,6,8,10] 




// Spread with Object Literals

const data = {
    email:'shafi@gmail.com',
    password: 'abcd'
};

const dataCopy = {...data, id: 786, name:'shafi'};

console.log(dataCopy);

// output : {email: 'shafi@gmail.com', password: 'abcd', id: 786, name: 'shafi'}