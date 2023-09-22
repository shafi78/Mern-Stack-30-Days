// Filter


let num = [1,2,3,6,2,,10,12,13,15,18];

let ans = num.filter((el) => {
    return el%2==0;         // filter even number
})

console.log(ans);

// output : [2, 6, 2, 10, 12, 18]





// Every (similar to &&)

num = [1,2,3,4];

let even = num.every((el) => {
    return el%2==0;
})

console.log(even);

// output : false



num = [2,4,6];

even = num.every((el) => {
    return el%2==0;
})

console.log(even);

// output : true





// Some (similar to ||)

num = [1,2,3,4];

ans = num.some((el) => {
    return el%2==0;
})

console.log(ans);

// output : true



num = [2,4,6];

ans = num.some((el) => {
    return el%2==0;
})

console.log(ans);

// output : true




// Reduce

num = [1,2,3,4];

let finalValue = num.reduce((res,el) => {
    console.log(res);   // 1 3 6
    return res+el ;
})

console.log(finalValue);

// output : 10



// finding maximum in an array using Reduce

let arr = [1,4,2,5,6,7,8,4,6];

let max = arr.reduce((max,el) => {
    if (max < el){
        return el;
    }

    else {
        return max ;
    }
})

console.log(max);

// output : 8