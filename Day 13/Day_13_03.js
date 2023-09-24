// DOM Events


// onclick()

let btn = document.querySelector('button');

btn.onclick = function() {
    console.log("Button was clicked");
}

// OR

function sayHello() {
    alert("Hello!");
}

btn.onclick = sayHello;




// on mouse enter

btn.onmouseenter = function() {
    console.log("You entered a button");
}




// Event Listeners

btn.addEventListener("click",sayHello)

btn.addEventListener("dblclick",function() {
    console.log("Double Clicked");
})