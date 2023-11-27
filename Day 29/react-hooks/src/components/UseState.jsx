import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);

    const btnClick = () => {
        setCount(count+1);
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={btnClick}>+</button>
    </div>
  )
}

export default UseState