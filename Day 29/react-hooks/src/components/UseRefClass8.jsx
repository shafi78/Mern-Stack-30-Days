// used to access dom directly

import React, { useRef, useState } from 'react'

const UseRefClass8 = () => {
    const [data,setData] = useState("");

    const inputElement = useRef("");

    const changeStyle = () => {
        inputElement.current.style.backgroundColor = "green";
        inputElement.current.focus();
    }

  return (
    <div>
        <input ref={inputElement} type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button onClick={changeStyle}>click</button>
    </div>
  )
}

export default UseRefClass8