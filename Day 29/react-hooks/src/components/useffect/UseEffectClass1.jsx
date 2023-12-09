import React, { useEffect, useState } from 'react'

const UseEffectClass1 = () => {
    const url = "https://catfact.ninja/fact";
    const [fact,setFact] = useState("");

    const handleget = async() => {
        let res = await fetch(url) ;
        let data = await res.json();
        setFact({fact:data.fact});
    }

    useEffect(() => {
        async function getFact(){
            let res = await fetch(url) ;
            let data = await res.json();
            setFact({fact:data.fact});
        }
        getFact();
    },[])

  return (
    <div>
        <h5>{fact.fact}</h5>
        <button onClick={handleget}>New one</button>
    </div>
  )
}

export default UseEffectClass1