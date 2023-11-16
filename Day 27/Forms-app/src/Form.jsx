import React, { useState } from 'react'

const Form = () => {
    const [formData,setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    })

    const handleInputChange = (e) => {

        setFormData((currData) => {
            return {...currData, [e.target.name] : e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }



  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name : </label>
        <input type="text" placeholder='Enter your name' value={formData.fullName} onChange={handleInputChange} id='fullName' name='fullName' />
        <br />
        <label htmlFor="userName">User Name : </label>
        <input type="text" placeholder='Enter username' value={formData.userName} onChange={handleInputChange} id='userName' name='userName' />
        <br />
        <label htmlFor="password">User Password : </label>
        <input type="password" placeholder='Enter password' value={formData.password} onChange={handleInputChange} id='password' name='password' />
        <br />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form