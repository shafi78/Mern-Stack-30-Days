// Practice Questions


// Q 1) Check if all numbers in our array are multiple of 10 or not.

num = [1,22,3,4,5,30] ;

let ans = num.every((el)=> {
    return el%10 == 0;
})

console.log(ans);

// output : false





// Q 2) Create a function to find the min number in an array.

function getMin(arr) {
    let min = arr.reduce((min,el) => {
        if (min<el){
            return min;
        }
    
        else{
            return el;
        }
    })
    
    return min;
}

let arr = [1,2,3,4,5,6,7];

console.log(getMin(arr));

// output : 1