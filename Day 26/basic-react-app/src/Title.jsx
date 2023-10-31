import React from 'react'

const Title = () => {
    let name = "Shafi" ;
  return (
    <div>
        <h1>Title Component</h1>
        <h2 className='my-name'>Hello, {name.toUpperCase()}</h2>
    </div>
  )
}

export default Title ;

