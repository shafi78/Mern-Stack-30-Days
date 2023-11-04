import React from 'react'

const Form = () => {

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form was submitted");
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='write something'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form