import React, { useState } from 'react'

const LikeButton = () => {

    const [islike,setIsLike] = useState(false);

    function clicked() {
        let newVal = !islike ;
        setIsLike(newVal);
    }
    
  return (
    <div>
        <p onDoubleClick={clicked}>
            {islike ? (<i className='fa-regular fa-heart'></i>) :
            (<i className='fa-solid fa-heart' style={{color:"red",fontSize:"2rem"}}></i>)
            }
        </p>
    </div>
  )
}

export default LikeButton