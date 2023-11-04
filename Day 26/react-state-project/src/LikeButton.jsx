import React, { useState } from 'react'

const LikeButton = () => {

    const [islike,setIsLike] = useState(false);
    const [count,setCount] = useState(0);

    function clicked() {
        let newVal = !islike ;
        setIsLike(newVal);
    }

    function btnClick() {
      setCount((prev) => {
        return prev+1 ;
      })

      setCount((prev) => {
       return prev+1 ;
      })
    }
    
  return (
    <div>
        <p onClick={clicked}>
            {islike ? (<i className='fa-regular fa-heart'></i>) :
            (<i className='fa-solid fa-heart' style={{color:"red"}}></i>)
            }
        </p>
        <h3 onClick={btnClick} style={{cursor:"pointer"}}>{count}</h3>
    </div>
  )
}

export default LikeButton