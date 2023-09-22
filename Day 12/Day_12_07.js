// Array Methods


// forEach

let arr = [1,2,3,4,5];

let print = function (el){
    console.log(el);
}

arr.forEach(print);

// same as

arr.forEach(function(e) {
    console.log(e);
});



let array = [
{
    name:'shafi',
    marks: 85.5
},

{
    name:'sameer',
    marks: 82.23
},

{
    name:'yusuf',
    marks: 90.34
}

];

array.forEach((student) => {
    console.log(student);
})

// output : 

// {name: 'shafi', marks: 85.5}
// {name: 'sameer', marks: 82.23}
// {name: 'yusuf', marks: 90.34}