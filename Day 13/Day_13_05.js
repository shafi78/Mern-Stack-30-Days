// Form Events


let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("Form submitted");
})




// Extracting Form Data

form.addEventListener("submit",function(event){
    event.preventDefault();

    let input = document.querySelector('input');
    let btn = document.querySelector('button');

    console.log(input.value)
})


form.addEventListener("submit",function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
})




// More Events


// 1) change event

user.addEventListener("change",function(){
    console.log("Input changed");

    console.log("Final value of change event : ",user.value);
})



// 2) input event

user.addEventListener("input",function(event){
    console.log("Input changed");

    console.log("Final value of input event : ",user.value);
})