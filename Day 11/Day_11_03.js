// Nesting Objects (Object of Objects)


let classInfo = {
    shafi: {
        grade: 'A+',
        city: 'saundatti'
    },

    sameer: {
        grade : 'A',
        city: 'malapur'
    },

    yusuf: {
        grade: 'A+',
        city: 'dharwad'
    }
};

console.log(classInfo);

console.log(classInfo.shafi);
console.log(classInfo.shafi.city);      // saundatti