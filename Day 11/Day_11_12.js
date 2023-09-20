// return Keyword


function functName(){
    // do something
    // retun val ;
}



function sum(a,b){
    return a+b ;
}

console.log(sum(3,4));          // output : 7



function sum(a,b){
    return a+b ;
}

console.log(sum(sum(3,4),3));   // output : 6



function isAdult(age) {
    
    if (age >= 18){
        return 'Adult';
    }

    else {
        return 'Not Adult';
    }
}

console.log(isAdult(18));       // output : Adult