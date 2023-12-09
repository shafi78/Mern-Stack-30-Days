import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutClass9 = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    },[])

    useEffect(() => {
        inputRef.current.value = "Hello";
    },[])

  return (
    <div>
        <input type="text" ref={inputRef} value="shafi" />
    </div>
  )
}

export default UseLayoutClass9