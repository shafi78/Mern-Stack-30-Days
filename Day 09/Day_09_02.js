// Practice Questions


// Q 1) For the given string :

let msg = "help!" ;

newMsg = msg.trim().toUpperCase();
console.log(newMsg);                        // HELP!



// Q 2) For the string -> let name = "MernStack", predict output for thw following :

let name = "MernStack" ;

console.log(name.slice(4,9));               // Stack
console.log(name.indexOf("rn"));            // 2
console.log(name.replace("Mern","Lamp"));   //LampStack



// Q 3) Seperate the "Stack" part in above string & replace "t" with "l" in it.

console.log(name.slice(4).replace("t","l"))