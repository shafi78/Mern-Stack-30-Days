// Event Listener for elements 

let p = document.querySelector("p");

p.addEventListener("click",function() {
    console.log("Para was clicked");
}
);

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function() {
    console.log("Mouse inside box");
})




// this in Event Listeners

let btn = document.querySelector("button");

btn.addEventListener("click",function() {
    console.log(this.innerText);
})


p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3"); 

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);




// Keyboard Events

btn = document.querySelector('button');

btn.addEventListener("click",function(event){
    console.log(event);
})

let inp = document.querySelector('input');

inp.addEventListener("keydown",function(){
    console.log("Key was pressed")
})


inp.addEventListener("keyup",function(){
    console.log("Key was released")
})



// Moving characters using keyboard events

inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);

    if (event.code == "ArrowUp"){
        console.log("Character moves up")
    }
    
    else if(event.code == "ArrowDown"){
        console.log("character moves backward");
    }

    else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }

    else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }
});