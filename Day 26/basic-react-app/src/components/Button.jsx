import React from 'react'

function printHello(event) {
    console.log(event);
    console.log("Hello!");
}

function handleHover() {
    console.log("Hover!");
}

function handleDBLclick() {
    console.log("Double click!");
}

const Button = () => {
  return (
    <div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={handleHover}>This is paragraph</p>
        <button onDoubleClick={handleDBLclick}>Double click</button>
    </div>
  )
}

export default Button