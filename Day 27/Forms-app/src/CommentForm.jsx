import React, { useEffect, useState } from 'react'

const CommentForm = () => {
    const [formData,setFormData] = useState({
        username: "",
        remarks: "",
        rating: 1,
    })

    const handleInputChange = (e) => {
        setFormData((currData) => {
            return {...currData,[e.target.name]: [e.target.value] };
        })
    }

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
    }

  return (
    <div>
        <h4>Post a comment</h4>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input type="text" placeholder='username' value={formData.username} onChange={handleInputChange} name='username' id='username' />
            <br /><br />
            <label htmlFor="remarks">Remarks : </label>
            <textarea rows={5} cols={20} value={formData.remarks} placeholder='add few remarks' onChange={handleInputChange} name="remarks" id='remarks' >Remarks</textarea>
            <br /><br />
            <label htmlFor="rating">Rating : </label>
            <input type='number' placeholder='rating' min={1} max={5} value={formData.rating} onChange={handleInputChange} name='rating' id='rating' />
            <br /><br />
            <button type='submit'>Add comment</button>
        </form>
    </div>
  )
}

export default CommentForm