import React, { useState } from 'react'

const UsestateClass2 = () => {
    const [name,setName] = useState("shafi");

    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <div>
        <input type="text" placeholder='enter your name' value={name} onChange={handleChange} />
        <p>{name}</p>
    </div>
  )
}

export default UsestateClass2