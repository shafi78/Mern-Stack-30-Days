// Call Stack 


function hello() {
    console.log("Hello");
}

function demo() {
    hello();
}

demo();         // Hello



// Visualizing the Call Stack

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans =  two() + one();
    console.log(ans);
}

three();        // 3



// Break Points (Debugging tools)

// console -> source -> script.js -> Adding breakpoint




// JS is Single Threaded

setTimeout(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    console.log("MERN STACK");
}, 2000);

console.log("Full Stack");



// Call back Hell (Call back nesting)

let h1 = document.querySelector('h1');

function changeColor(color,delay,nextColorChange) {
    setTimeout(() => {
        h1.style.color = color ;
        if (nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000, () => {
    changeColor("green",1000,() => {
        changeColor("blue",1000,() => {
            changeColor("yellow",1000,() => {
                changeColor("pink",1000);
            });
        });
    })
});



function savetoDb (data,success,failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1 ;

    if (internetSpeed > 4){
        success();
    }

    else {
        failure();
    }
}

savetoDb("shafi",() => {
    console.log("Your Data Was Saved");
    savetoDb("hello world",() => {
        console.log("Success 2: data 2 saved")

        savetoDb("shafi",() => {
            console.log("success 3: data 3 saved");
        },

        () => {
            console.log("failure 3: weak connection");
        }

        )
    },

    () => {
        console.log("failure 2 : weak connection");
    }
    
    );
},

() => {
    console.log("Weak Connection , Data Not Saved");
}
);




// Promises

function savetoDb (data) {
    let internetSpeed = Math.floor(Math.random()*10)+1 ;

    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1 ;

        if (internetSpeed > 4){
            resolve("success: data was saved");
        }

        else {
            reject("failure: weak connection");
        }
    })
}

savetoDb("Mern Stack Development");



// Promises ( then() & catch() )

savetoDb("Mern stack")


.then(() => {
    console.log("promise was resolved");
})

.catch(() => {
    console.log("promise was rejected");
});



// promise chaining 

savetoDb("Mern stack")
    .then(() => {
        console.log("data 1 was saved");
        return savetoDb("hello world")
    })
    
    .then(() => {
        console.log("data 2 was saved");
        return savetoDb("shafi");
    })
    
    .then(() => {
        console.log("data 3 was saved");
        return savetoDb("sam");
    })

    .catch(() => {
        console.log("promise was rejected");
    });



// Results & Errors in Promises

savetoDb("Mern stack")
    .then((result) => {
        console.log("data 1 was saved");
        console.log("Result of promise : ",result);
        return savetoDb("hello world")
    })
    
    .then((result) => {
        console.log("data 2 was saved");
        console.log("Result of promise : ",result);
        return savetoDb("shafi");
    })
    
    .then((result) => {
        console.log("data 3 was saved");
        console.log("Result of promise : ",result);
        return savetoDb("sam");
    })

    .catch((error) => {
        console.log("promise was rejected");
        console.log("Error of promise : ",error);
    });




// Applying promises to color change function

h1 = document.querySelector('h1');

function changeColor(color,delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        h1.style.color = color ;
        resolve("Color changed");
    },delay);
   });
}

changeColor("red",1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange",1000);
})

.then(() => {
    console.log("orange color was completed");
    return changeColor("green",1000);
})

.then(() => {
    console.log("green color was completed");
    return changeColor("blue",1000);
})