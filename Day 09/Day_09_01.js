// String Methods

// Format : stringName.method()



// 1) str.trim()

let str = "     Hello       ";
console.log(str);
console.log(str.trim());            // Hello



// 2) str.toUpperCase()

let name = "Mern Stack";
console.log(name.toUpperCase());    // MERN STACK


// 3) str.toLowerCase()

let user = "Shafi" ;
console.log(user.toLowerCase());    // shafi



// 4) str.indexOf()

str = "ILoveCoding" ;
console.log(str.indexOf("Love"));   // 1
console.log(str.indexOf("o"));      // 2
console.log(str.indexOf("c"));      // -1



// Method Chaining 

let msg = "     hello   " ;
// let newmsg = msg.trim() ;
// console.log("After trim : ",newmsg);
// newmsg = newmsg.toLocaleUpperCase();
// console.log("After uppercase : ",newmsg);

let newmsg = msg.trim().toUpperCase() ;     
console.log("New message : ",newmsg);           // Hello 



// 5) str.slice()

str = "ILoveCoding" ;
console.log(str.slice(5));      // Coding
console.log(str.slice(1,5));    // Love
console.log(str.slice(-1));     // g



// 6) Replace 

str = "ILoveCoding" ;
let newStr = str.replace("Love","Do");
console.log(newStr);



// 7) Repeat 

str = "Mango" ;
console.log(str.repeat(3));     //MangoMangoMango


