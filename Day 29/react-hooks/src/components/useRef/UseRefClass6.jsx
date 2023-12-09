import React, { useRef } from 'react'

const UseRefClass6 = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // inputRef.current.value = "" ;
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>shafi</h1>
        <input type="text" placeholder='name' ref={inputRef} />
        <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default UseRefClass6