// Loops with Nested Arrays


let heroes = [['ironman','spiderman','thor'],['superman','wonder woman','flash']];

for (let i=0 ; i<heroes.length ; i++){
    console.log(i,heroes[i]);           // outer array

    for (let j=0 ; j<heroes[i].length ; j++){
        console.log(j,heroes[i][j]);    // inner array
    }
}

// output : 
// 0 (3) ['ironman', 'spiderman', 'thor']
// 0 'ironman'
// 1 'spiderman'
// 2 'thor'
// (3) ['superman', 'wonder woman', 'flash']
// 0 'superman'
// 1 'wonder woman'
// 2 'flash'




let student = [['shafi',85],['sameer',80],['yusuf',95]];

for (let i=0 ; i<student.length ; i++){
    console.log(i,student[i]);

    for (let j=0 ; j<student[i].length ; j++){
        console.log(j,student[i][j]);
    }
}

// output : 
// 0 (2) ['shafi', 85]
// 0 'shafi'
// 1 85
// 1 (2) ['sameer', 80]
// 0 'sameer'
// 1 80
// 2 (2) ['yusuf', 95]
// 0 'yusuf'
// 1 95