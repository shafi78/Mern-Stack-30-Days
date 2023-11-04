import React from 'react'

const Activity = ({userName,textColor}) => {

    const styles = {color: textColor}
  return (
    <>
    <p style={styles}>Hello, {userName}</p>
    </>
  )
}

export default Activity