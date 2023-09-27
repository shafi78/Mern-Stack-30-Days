// Axios

let btn = document.querySelector("button");

btn.addEventListener("click",async() => {
    let fact = await getFacts();
    console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact ;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }

    catch(err) {
        console.log("Error : ",err);
        return "No facts available";
    }
}



// Dog API ( To get Random Dog images )

let url2 = "https://dog.ceo/api/breeds/image/random";
btn = document.querySelector("button");

btn.addEventListener("click",async() => {
    let link = await getImage();
    console.log(link);

    let img = document.querySelector("#result");
    img.setAttribute("src",link) ;
})


async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }

    catch(err) {
        console.log("Error : ",err);
        return "/";
    }
}




// Axios ( Sending Headers )

url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accespt: "application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
    }

    catch (err) {
        console.log(err);
    }
}