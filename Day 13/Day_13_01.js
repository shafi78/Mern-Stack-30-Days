// Document Object Model (DOM)


// Selecting Elements

// 1) By id

let imgObj = document.getElementById('mainImg');

imgObj.src = '../Day 04/img.jpg';


let changeDesc = document.getElementById('description');



// 2) By Class Name

let smallImages = document.getElementsByClassName('oldImg');

for (let i=0 ; i<smallImages.length ; i++){
    smallImages[i].src = '../Day 04/man.png';
}



// 3) By Tag Name

let para = document.getElementsByTagName('p');

// para[1].innerText = 'hello';



// Query Selectors  : returns first element

console.log(document.querySelector('h1'))
console.log(document.querySelector('div a'));


// Query SelectorAll : returns all elements

console.log(document.querySelectorAll('div a'));
console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll('a'));



// Setting up content in objects

para = document.querySelector('p')

// innerText = shows the visible text contained in a Node

'Spider-Man is a superhero arrearing in American comic books published by Marvel Comics created by writer-editor Stan Lee and artist Steve Ditko, he first appeaared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows , video games , novels and plays'



// textContent = shows all the full text

'\n        Spider-Man is a superhero arrearing in American comic books published by \n    \n        Marvel Comics\n        created by writer-editor Stan Lee and artist Steve Ditko, he first appeaared in the anthology comic book\n\n        Amazing Fantasy\n\n        #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows , video games , novels and plays\n    '



// innerHTML = shows the full markup

'\n        <b>Spider-Man</b> is a superhero arrearing in American comic books published by \n    \n        <a href="https://www.google.com/search?q=Marvel+Comics">Marvel Comics</a>\n        created by writer-editor <b>Stan Lee</b> and artist <b>Steve Ditko</b>, he first appeaared in the anthology comic book\n\n        <a href="https://www.google.com/search?q=Amazing+Fantasy">Amazing Fantasy</a>\n\n        #15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has been featured in comic books, television shows , video games , novels and plays\n    '



// Manipulation

let head = document.querySelector('h1');

head.innerHTML = '<u>Spider</u>'

head.innerHTML = `<u>${head.innerText}</u>`;



// Manipulation Attribute

let img = document.querySelector('img');

img.getAttribute('id')
'mainImg'


img.setAttribute('id','spidermanImg')

// this will remove all the style from the image



// reset the image attributes

img.setAttribute('id','mainImg')