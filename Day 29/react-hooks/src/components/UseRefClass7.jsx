// useRef -> It creates a mutable variable which will not re-render component

import React, { useEffect, useRef, useState } from 'react'

const UseRefClass7 = () => {
    const [myData,setMyData] = useState("");

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current+1 ;
    });

  return (
    <div>
        <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
        <p>The number of times render : {count.current}</p>
    </div>
  )
}

export default UseRefClass7