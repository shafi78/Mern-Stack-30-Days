import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter] = useState(0);
    
    function clickPlus() {
        setCounter(counter+1);
    }
    
    function clickMinus() {
        if(counter>0) {
          setCounter(counter-1);
        }
    }


  return (
    <>
    <h3>Count = {counter}</h3>
    <button onClick={clickPlus}>Click +</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={clickMinus}>Click -</button>
    </>
  )
}

export default Counter