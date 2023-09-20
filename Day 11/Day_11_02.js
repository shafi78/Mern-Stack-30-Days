// Thread / Twitter Post


const post = {
    username: "@shafitwits",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ['@fullstack','merndeveloper']
};

console.log(post);



// Getting values

console.log(post['username']);

// OR

console.log(post.likes);



// Conversion in getValues

const obj = {
    1: 'a',
    2: 'b',
    null: 'd',
    true: 'c',
    undefined: 'e',
}

console.log(obj[null])
console.log(obj['2'])   // here 2 is not index and not a number 
                        // it is converted into string 



// Add / Update Values 

const student = {
    name: 'shafi',
    rno: 39,
    marks: 85.56,
    city: 'saundatti'
};

console.log(student);


// changing city

student.city = 'dharwad';
console.log(student);


// changing marks

student.marks = 90.5;
console.log(student);


// deleting marks

delete student.marks;
console.log(student);