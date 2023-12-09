import React, { useCallback, useState } from 'react'

const UseCallback = () => {

    const [count,setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[]);


    console.log("Component rendered with count : ",count);

  return (
    <div>
        <p>Count:  {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallback