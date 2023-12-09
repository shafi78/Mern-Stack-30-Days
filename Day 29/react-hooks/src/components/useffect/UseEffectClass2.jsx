import React, { useEffect, useState } from 'react'

const UseEffectClass2 = () => {
    const  [img,setImg] = useState("");
    const url = "https://dog.ceo/api/breeds/image/random";

    const getData = async() => {
        let res = await fetch(url) ;
        let data = await res.json() ;
        setImg({...data});
        console.log({...data})
    }

    useEffect(() => {
        getData();
    },[])


  return (
    <div>
        <img src={img.message} alt="" width={500} height={500} />
        <p>{img.status}</p>
        <br />
        <button onClick={getData}>Get</button>
    </div>
  )
}

export default UseEffectClass2