// Node js

// javascript runtime environment



// Node REPL (cmd)



// Node Files

let n=5 ;

for (let i=0 ; i<n ; i++) {
    console.log("Hello ,",i);
}

// to excute, type in terminal :

// node Day_17_01.js



// Process 

// process : This object provides information about , control over , the current Node.js process

// process.argv : return an array containing the command line arguments passed when the Node.js process was launched

console.log(process.argv)

// output : Mern Stack 30 Days\Day 17> node Day_17_01.js shafi    

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Mern Stack 30 Days\\Day 17\\Day_17_01.js',      
//     'shafi'
// ]



// module.exports

const someValue = require("./math");

console.log(someValue);



// Export in Directories

const info = require("./new");

console.log(info);




// NPM ( Node Package Manager )

// installing packages

// package.json


// Local v/s global installation

// local : npm i <package>

// global : npm i -g <package>
// linking : npm link <package>

// import modules

