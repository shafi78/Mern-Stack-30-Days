// Async function

async function greet() {
    throw "404 Page Not Found";
    return "hello";
}

greet()
.then((result) => {
    console.log("Promise was resolved");
    console.log("result was : ",result);
})

.catch((err) => {
    console.log("Promise was rejected with error: " + err);
})


let demo = async() => {
    return 5;
}



// Await Keyword

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1 ;
            console.log(num);
        }, 1000);
    })
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}



// Applying await keyword to change the color

h1 = document.querySelector('h1');

function changeColor(color,delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        h1.style.color = color ;
        resolve("Color changed");
    },delay);
   });
}

async function demo() {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
}



// Handling Rejections

h1 = document.querySelector('h1');

function changeColor(color,delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() *5)+1 ;

        if (num>3) {
            reject("promise rejected");
        }

        h1.style.color = color ;
        console.log(`color changed to ${color}!`);
        resolve("Color changed");
    },delay);
   });
}

async function demo() {
    
    try {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
    }

    catch(err){
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number : ",a+3);
}