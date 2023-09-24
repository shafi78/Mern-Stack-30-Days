// Practice Questions


// Q 1) Add the following elements to the container using only javascript and the DOM methods.

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




// Q 2) Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let input = document.createElement('input');
let btn = document.createElement('button');

body.appendChild(input);
body.appendChild(btn);

btn.innerText = "Click me";




// Q 3) Add the following attributes to the element : 

// - change placeholder value of input to "username"
// - change the id of button to "btn"

input.placeholder = "username"

btn.setAttribute('id',"btn");



// Q 4) Create an h1 element on the page and set its text to 'DOM Practice' underlined. change its color to purple.

h1 = document.createElement('h1');

body.appendChild(h1);

h1.innerHTML = '<u>DOM Practice</u>';
h1.style.color = 'purple';




// Q 5) Create a p tag on the page and set its text to "Mern Stack Development", where Stack is bold.

newP = document.createElement('p');

body.appendChild(newP);

newP.innerHTML = 'Mern Stack Development';