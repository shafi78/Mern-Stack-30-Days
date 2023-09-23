// Practice Questions

// Add the following elements to the container using only javascript and the DOM methods.

// i) a <p> with red text that says "Hey I'm red!"

let newP = document.createElement('p');
let body = document.querySelector('body');

body.appendChild(newP);
newP.innerText = "Hey I'm red!";
newP.style.color = "red";




// ii) an <h3> with blue text that says "I'm a blue h3!"

let headingh3 = document.createElement('h3');

body.appendChild(headingh3);
headingh3.innerText = "I'm a blue h3!";
headingh3.style.color = "blue";




// iii) a <div> with a black border and pink background color with the following elements inside of it.

// * another <h1> that says "I'm in a div"
// * a <p> that says "ME TOO!"


let div = document.createElement('div');

body.appendChild(div);

let h1 = document.createElement('h1');
div.appendChild(h1);
h1.innerText = "I'm in a div";

newP = document.createElement('p');
div.appendChild(newP);
newP.innerText = "ME TOO!";

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';