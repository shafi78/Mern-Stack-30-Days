// Rest


function sum(...args){
    for (let i=0 ; i<args.length ; i++){
        console.log("You gave us : ",args[i]);
    }
}

console.log()



function min(a,b,c,d){
    console.log(arguments);     // collection
}

min(1,2,3,4,5);