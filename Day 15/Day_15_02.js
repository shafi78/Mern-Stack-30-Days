// API

// Application programming interface



// JSON

// Javascript object notation



// Accessing Data from JSON

let json = '{"name": "shafi","rno": 39}'; 

console.log(json);


// convertion of object to JSON

let student = {
    name: "sameer",
    marks: 86
}

let ObjectTojson = JSON.stringify(student);
console.log(ObjectTojson);



// Testing API request

// Hoppscotch 
// Postman API



// Ajax (Asynchronous javascript and XML)



// Https Verbs 

// GET
// POST
// DELETE




// Status codes

// 200 - OK
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error



// Add information in URL's

// ex : https://www.google.com/search?q=harry+porter



// Https headers




// Our First Request

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    
    console.log(response);

    response.json().then((data) => {
        console.log(data);
    })
})

.catch((err) => {
    console.log("Error: ",err);
})



// Using fetch with Async await

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log("Error: ",err)
    }
    console.log("Bye!");
}