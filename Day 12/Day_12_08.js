// Map


let num = [1,2,3,4,5];

let double = num.map((el) => {
    return el*2 ;
});

console.log(double);

// output : [2, 4, 6, 8, 10]



let students = [
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

    let gpa = students.map((el) => {
        return el.marks/10 ;
    })

    console.log(gpa);

    // output : [8.55, 8.223, 9.034]