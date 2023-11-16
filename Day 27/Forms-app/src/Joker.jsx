import React, { useEffect, useState } from 'react'

const Joker = () => {
    const [joke,setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke" ;

    const getNewJoke = async() => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline})
    }

    useEffect(() => {
      async function getFirstJoke() {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline});
      }
      getFirstJoke();
    },[]);

  return (
    <div>
        <h1>Joke</h1>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>New Joke</button>
    </div>
  )
}

export default Joker