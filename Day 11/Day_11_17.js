// High order functions


function multipleGreet(func,count){
    for (let i=1 ; i<=count ; i++){
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreet(greet,10)



// High order functions (Returns)

function oddOrEvenFactory(request) {
    if (request == 'odd'){
        let odd = function (n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    }

    else if (request == 'even'){
        let even = function (n) {
            console.log(n%2 == 0);
        }
        return even;
    }

    else {
        console.log('wrong request');
    }
}

let request = 'odd';